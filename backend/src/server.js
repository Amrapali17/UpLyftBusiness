
import express from "express";
import ws from "ws";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === "production";

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Origin not allowed by CORS"));
  },
  credentials: true,
}));

app.use(express.json({ limit: "20kb" }));
app.use(cookieParser());

const {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
} = process.env;

if (
  !SUPABASE_URL ||
  !SUPABASE_ANON_KEY ||
  !SUPABASE_SERVICE_ROLE_KEY
) {
  throw new Error(
    "Missing Supabase environment variables in backend .env"
  );
}

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  {
    realtime: { transport: ws },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

const supabaseAuth = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    realtime: { transport: ws },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

// Email notifications using Resend
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const emailConfigured = Boolean(
  resend && process.env.NOTIFICATION_EMAIL
);

function validEmail(value) {
  return (
    typeof value === "string" &&
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
}

async function sendOwnerNotification({
  subject,
  text,
  replyTo,
}) {
  if (!emailConfigured) {
    console.warn("Email notifications are not configured.");
    return false;
  }

  try {
    const { error } = await resend.emails.send({
      from: "UpLyftBusiness Website <connect@uplyftbusiness.com>",
      to: [process.env.NOTIFICATION_EMAIL],
      ...(replyTo ? { replyTo } : {}),
      subject,
      text,
    });

    if (error) {
      console.error("Resend email failed:", error.message);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Resend email failed:", error.message);
    return false;
  }
}

// Secure authentication cookies
const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  path: "/",
};

function setAuthCookies(res, session) {
  res.cookie(
    "ub_access_token",
    session.access_token,
    {
      ...cookieOptions,
      maxAge: session.expires_in * 1000,
    }
  );

  res.cookie(
    "ub_refresh_token",
    session.refresh_token,
    {
      ...cookieOptions,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    }
  );
}

function clearAuthCookies(res) {
  res.clearCookie("ub_access_token", cookieOptions);
  res.clearCookie("ub_refresh_token", cookieOptions);
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "UpLyftBusiness backend is running!",
    timestamp: new Date().toISOString(),
    emailConfigured,
  });
});

// Project enquiry form
app.post("/api/enquiries", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      service,
      package: packagePreference,
      budget,
      timeline,
      message,
    } = req.body ?? {};

    if (
      ![name, email, service, message].every(
        value =>
          typeof value === "string" &&
          value.trim()
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide your name, email, service and project details.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanService = service.trim();
    const cleanMessage = message.trim();

    const cleanCompany =
      typeof company === "string" ? company.trim() : "";

    const cleanPhone =
      typeof phone === "string" ? phone.trim() : "";

    const cleanBudget =
      typeof budget === "string" ? budget.trim() : "";

    const cleanPackage =
      typeof packagePreference === "string"
        ? packagePreference.trim()
        : "";

    const cleanTimeline =
      typeof timeline === "string"
        ? timeline.trim()
        : "";

    if (
      !validEmail(cleanEmail) ||
      cleanName.length > 150 ||
      cleanService.length > 150 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please check your form details and try again.",
      });
    }

    const combinedMessage = [
      cleanMessage,
      `Package preference: ${cleanPackage || "Not specified"}`,
      `Preferred timeline: ${cleanTimeline || "Not specified"}`,
    ].join("\n\n");

    const { data, error } = await supabase
      .from("enquiries")
      .insert({
        full_name: cleanName,
        email: cleanEmail,
        company_name: cleanCompany || null,
        phone: cleanPhone || null,
        service: cleanService,
        budget: cleanBudget || null,
        message: combinedMessage,
      })
      .select("id")
      .single();

    if (error) {
      console.error(
        "Supabase enquiry insert failed:",
        error.message
      );

      return res.status(500).json({
        success: false,
        message:
          "We couldn't save your enquiry. Please try again.",
      });
    }

    const emailSent = await sendOwnerNotification({
      subject: `New website enquiry: ${cleanName}`,
      replyTo: cleanEmail,
      text: [
        `Enquiry ID: ${data.id}`,
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Phone: ${cleanPhone || "Not provided"}`,
        `Company: ${cleanCompany || "Not provided"}`,
        `Service: ${cleanService}`,
        `Package: ${cleanPackage || "Not specified"}`,
        `Budget: ${cleanBudget || "Not specified"}`,
        `Timeline: ${cleanTimeline || "Not specified"}`,
        "",
        "Project details:",
        cleanMessage,
      ].join("\n"),
    });

    return res.status(201).json({
      success: true,
      message: "Your enquiry was submitted successfully.",
      enquiryId: data.id,
      emailNotificationSent: emailSent,
    });
  } catch (error) {
    console.error(
      "Enquiry submission failed:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      company,
      service,
      message,
    } = req.body ?? {};

    if (
      ![name, phone, email, message].every(
        value =>
          typeof value === "string" &&
          value.trim()
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide your name, phone, email and message.",
      });
    }

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim().toLowerCase();

    const cleanCompany =
      typeof company === "string" ? company.trim() : "";

    const cleanService =
      typeof service === "string" ? service.trim() : "";

    const cleanMessage = message.trim();

    if (
      !validEmail(cleanEmail) ||
      !/^[6-9]\d{9}$/.test(cleanPhone) ||
      cleanName.length > 150 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Check your details. Enter a valid 10-digit Indian mobile number.",
      });
    }

    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        full_name: cleanName,
        phone: cleanPhone,
        email: cleanEmail,
        company_name: cleanCompany || null,
        service: cleanService || null,
        message: cleanMessage,
      })
      .select("id")
      .single();

    if (error) {
      console.error(
        "Supabase contact insert failed:",
        error.message
      );

      return res.status(500).json({
        success: false,
        message:
          "Database save failed. Please try again later.",
      });
    }

    const emailSent = await sendOwnerNotification({
      subject: `New contact message: ${cleanName}`,
      replyTo: cleanEmail,
      text: [
        `Contact ID: ${data.id}`,
        `Name: ${cleanName}`,
        `Phone: ${cleanPhone}`,
        `Email: ${cleanEmail}`,
        `Company: ${cleanCompany || "Not provided"}`,
        `Service: ${cleanService || "Not specified"}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    return res.status(201).json({
      success: true,
      message: emailSent
        ? "Your message was saved and the notification email was sent."
        : "Your message was saved, but the notification email could not be sent.",
      contactId: data.id,
      emailNotificationSent: emailSent,
    });
  } catch (error) {
    console.error(
      "Contact submission failed:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

// Request a one-time email code
app.post("/api/auth/send-otp", async (req, res) => {
  try {
    const { mode, method, name, email } = req.body ?? {};

    if (
      method !== "email" ||
      !["login", "register"].includes(mode) ||
      !validEmail(email)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid sign-in details.",
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = typeof name === "string" ? name.trim() : "";

    if (mode === "register" && (!cleanName || cleanName.length > 150)) {
      return res.status(400).json({
        success: false,
        message: "Please enter your full name.",
      });
    }

    const { error } = await supabaseAuth.auth.signInWithOtp({
      email: cleanEmail,
      options: {
        shouldCreateUser: mode === "register",
        ...(mode === "register" ? { data: { full_name: cleanName } } : {}),
      },
    });

    if (error) {
      console.error("OTP request failed:", error.message);
      return res.status(400).json({
        success: false,
        message: "Unable to request a code. Check the email and try again.",
      });
    }

    return res.json({
      success: true,
      message: "If eligible, a verification code has been sent to your email.",
    });
  } catch (error) {
    console.error("Send OTP failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to process your request right now.",
    });
  }
});

// Verify email code and save the user's profile
app.post("/api/auth/verify-otp", async (req, res) => {
  try {
    const { mode, method, email, otp, name } = req.body ?? {};
    const cleanEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";
    const cleanName = typeof name === "string" ? name.trim() : "";

    if (
      method !== "email" ||
      !["login", "register"].includes(mode) ||
      !validEmail(cleanEmail) ||
      typeof otp !== "string" ||
      !/^\d{6}$/.test(otp) ||
      cleanName.length > 150
    ) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email and 6-digit verification code.",
      });
    }

    const { data, error } = await supabaseAuth.auth.verifyOtp({
      email: cleanEmail,
      token: otp,
      type: "email",
    });

    if (error || !data.user || !data.session) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired code. Request a new code and try again.",
      });
    }

    const user = data.user;

    const { data: existingProfile, error: lookupError } = await supabase
      .from("profiles")
      .select("id, role")
      .eq("id", user.id)
      .maybeSingle();

    if (lookupError) {
      console.error("Profile lookup failed:", lookupError.message);
      return res.status(500).json({
        success: false,
        message: "Unable to load your profile.",
      });
    }

    const profileName =
      cleanName ||
      (typeof user.user_metadata?.full_name === "string"
        ? user.user_metadata.full_name.trim()
        : "");

    let profileError;

    if (existingProfile) {
      const updateResult = await supabase
        .from("profiles")
        .update(profileName ? { full_name: profileName } : {})
        .eq("id", user.id);

      profileError = updateResult.error;
    } else {
      const insertResult = await supabase.from("profiles").insert({
        id: user.id,
        full_name: profileName || null,
        role: "customer",
      });

      profileError = insertResult.error;
    }

    if (profileError) {
      console.error("Profile save failed:", profileError.message);
      return res.status(500).json({
        success: false,
        message: "Email verified, but we couldn't save your profile.",
      });
    }

    setAuthCookies(res, data.session);

    await sendOwnerNotification({
      subject: `${mode === "register" ? "New user registration" : "User login"}: ${cleanEmail}`,
      replyTo: cleanEmail,
      text: [
        `Event: ${mode === "register" ? "New user registration" : "User login"}`,
        `Name: ${profileName || "Not provided"}`,
        `Email: ${cleanEmail}`,
        `User ID: ${user.id}`,
        `Time (UTC): ${new Date().toISOString()}`,
      ].join("\n"),
    });

    return res.json({
      success: true,
      message: "Email verified successfully.",
      user: {
        id: user.id,
        email: user.email,
        name: profileName || null,
      },
    });
  } catch (error) {
    console.error("OTP verification failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to verify your code right now.",
    });
  }
});

// Create a password after successful email verification
app.post("/api/auth/set-password", async (req, res) => {
  try {
    const { password, confirmPassword } = req.body ?? {};
    const accessToken = req.cookies?.ub_access_token;

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Please verify your email first.",
      });
    }

    if (
      typeof password !== "string" ||
      password.length < 8 ||
      password.length > 72
    ) {
      return res.status(400).json({
        success: false,
        message: "Password must be between 8 and 72 characters.",
      });
    }

    if (
      typeof confirmPassword !== "string" ||
      password !== confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match.",
      });
    }

    const { data: userData, error: userError } =
      await supabaseAuth.auth.getUser(accessToken);

    if (userError || !userData.user) {
      clearAuthCookies(res);
      return res.status(401).json({
        success: false,
        message: "Your verification session has expired. Please verify again.",
      });
    }

    const { error: passwordError } =
      await supabase.auth.admin.updateUserById(userData.user.id, {
        password,
      });

    if (passwordError) {
      console.error("Password creation failed:", passwordError.message);
      return res.status(400).json({
        success: false,
        message: "Unable to create your password. Please try again.",
      });
    }

    clearAuthCookies(res);

    return res.json({
      success: true,
      message: "Password created successfully. Please sign in.",
    });
  } catch (error) {
    console.error("Set password failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to create your password right now.",
    });
  }
});

// Sign in using email and password
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body ?? {};
    const cleanEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";

    if (
      !validEmail(cleanEmail) ||
      typeof password !== "string" ||
      !password ||
      password.length > 72
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email and password.",
      });
    }

    const { data, error } = await supabaseAuth.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    if (error || !data.user || !data.session) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password. Please try again.",
      });
    }

    setAuthCookies(res, data.session);

    return res.json({
      success: true,
      message: "Login successful.",
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata?.full_name || null,
      },
    });
  } catch (error) {
    console.error("Password login failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to log in right now. Please try again.",
    });
  }
});

// Check whether the current session is valid
app.get("/api/auth/me", async (req, res) => {
  try {
    const accessToken = req.cookies?.ub_access_token;
    const refreshToken = req.cookies?.ub_refresh_token;

    if (!accessToken && !refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Not signed in.",
      });
    }

    if (accessToken) {
      const { data, error } = await supabaseAuth.auth.getUser(accessToken);

      if (!error && data.user) {
        return res.json({
          success: true,
          user: {
            id: data.user.id,
            email: data.user.email,
          },
        });
      }
    }

    if (refreshToken) {
      const { data, error } =
        await supabaseAuth.auth.refreshSession({
          refresh_token: refreshToken,
        });

      if (!error && data.session && data.user) {
        setAuthCookies(res, data.session);

        return res.json({
          success: true,
          user: {
            id: data.user.id,
            email: data.user.email,
          },
        });
      }
    }

    clearAuthCookies(res);

    return res.status(401).json({
      success: false,
      message: "Your session has expired. Please sign in again.",
    });
  } catch (error) {
    console.error("Session check failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to check your session.",
    });
  }
});

// Sign out and clear authentication cookies
app.post("/api/auth/logout", async (req, res) => {
  try {
    const accessToken = req.cookies?.ub_access_token;

    if (accessToken) {
      const { error } = await supabase.auth.admin.signOut(
        accessToken,
        "local"
      );

      if (error) {
        console.warn("Session revocation warning:", error.message);
      }
    }
  } catch (error) {
    console.warn("Logout cleanup warning:", error.message);
  }

  clearAuthCookies(res);

  return res.json({
    success: true,
    message: "Signed out.",
  });
});

// Keep this 404 handler last
app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`UpLyftBusiness API running on port ${PORT}`);
});
