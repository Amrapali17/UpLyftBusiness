import {
    ArrowLeft,
    ArrowUpRight,
    Check,
    Sparkles,
  } from "lucide-react";
  
  import {
    Link,
    useParams,
  } from "react-router-dom";
  
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  
  function ServiceDetail() {
    const { serviceId } = useParams();
  
    const serviceData = {
      "web-development": {
        title: "Web Development",
        category: "Technology",
        description:
          "Professional websites and digital experiences built around your business goals.",
        basic: {
          name: "Basic",
          price: "Starting from ₹XX,XXX",
          description:
            "A professional digital presence for small businesses and individuals.",
          features: [
            "1–5 pages",
            "Responsive design",
            "Contact / WhatsApp button",
            "Google Maps integration",
            "Social media links",
            "Basic SEO",
            "Basic animations",
          ],
        },
        medium: {
          name: "Medium",
          price: "Starting from ₹XX,XXX",
          description:
            "A complete business website designed to build credibility and generate enquiries.",
          features: [
            "5–10 pages",
            "Custom UI / UX",
            "Advanced animations",
            "SEO-ready structure",
            "Lead / enquiry forms",
            "WhatsApp integration",
            "Google Analytics",
            "Speed optimization",
            "Content management",
          ],
          popular: true,
        },
        custom: {
          name: "Custom",
          price: "Let's discuss",
          description:
            "A completely tailored website for businesses with advanced requirements.",
          features: [
            "Fully custom design",
            "Custom functionality",
            "API integrations",
            "Booking systems",
            "E-commerce",
            "Advanced SEO",
            "Performance optimization",
            "Custom workflows",
            "Ongoing support",
          ],
        },
      },
  
      "digital-marketing": {
        title: "Digital Marketing",
        category: "Growth",
        description:
          "Marketing systems designed to increase visibility, attract the right audience and generate leads.",
        basic: {
          name: "Basic",
          price: "Starting from ₹XX,XXX",
          description:
            "A strong starting point for businesses building their digital presence.",
          features: [
            "Digital audit",
            "Basic SEO",
            "Content strategy",
            "Monthly reporting",
            "Keyword research",
            "Basic competitor analysis",
          ],
        },
        medium: {
          name: "Medium",
          price: "Starting from ₹XX,XXX",
          description:
            "A structured digital marketing system for businesses ready to grow.",
          features: [
            "Advanced SEO",
            "Content planning",
            "Lead generation",
            "Competitor research",
            "Campaign strategy",
            "Monthly optimization",
            "Performance reporting",
          ],
          popular: true,
        },
        custom: {
          name: "Custom",
          price: "Let's discuss",
          description:
            "A complete marketing strategy built around your market and growth goals.",
          features: [
            "Full digital strategy",
            "Multi-channel campaigns",
            "Advanced lead generation",
            "Conversion optimization",
            "Marketing automation",
            "Advanced reporting",
            "Growth planning",
          ],
        },
      },
  
      "social-media-management": {
        title: "Social Media Management",
        category: "Creative",
        description:
          "Build a consistent, recognizable and engaging social media presence.",
        basic: {
          name: "Basic",
          price: "Starting from ₹XX,XXX / month",
          description:
            "Essential social media management for businesses starting out.",
          features: [
            "Content calendar",
            "Social media management",
            "Basic creatives",
            "Caption writing",
            "Post scheduling",
            "Monthly report",
          ],
        },
        medium: {
          name: "Medium",
          price: "Starting from ₹XX,XXX / month",
          description:
            "A stronger social media system for brands looking to grow consistently.",
          features: [
            "Content strategy",
            "Creative direction",
            "Regular content",
            "Reels / short-form content",
            "Community management",
            "Performance tracking",
            "Monthly strategy",
          ],
          popular: true,
        },
        custom: {
          name: "Custom",
          price: "Let's discuss",
          description:
            "A fully managed social media strategy built around your brand.",
          features: [
            "Complete social strategy",
            "High-volume content",
            "Campaign management",
            "Influencer coordination",
            "Community building",
            "Advanced reporting",
            "Custom creative direction",
          ],
        },
      },
  
      "advertising-performance": {
        title: "Advertising & Performance",
        category: "Performance",
        description:
          "Performance advertising designed to turn attention into measurable business results.",
        basic: {
          name: "Basic",
          price: "Starting from ₹XX,XXX",
          description:
            "Launch your first focused advertising campaigns.",
          features: [
            "Campaign setup",
            "Meta Ads",
            "Audience research",
            "Basic creatives",
            "Campaign monitoring",
            "Performance report",
          ],
        },
        medium: {
          name: "Medium",
          price: "Starting from ₹XX,XXX",
          description:
            "Performance campaigns designed for consistent lead generation.",
          features: [
            "Meta + Google Ads",
            "Advanced targeting",
            "Multiple campaigns",
            "Creative testing",
            "Conversion tracking",
            "Optimization",
            "Monthly reporting",
          ],
          popular: true,
        },
        custom: {
          name: "Custom",
          price: "Let's discuss",
          description:
            "A complete performance marketing system for ambitious growth.",
          features: [
            "Multi-platform advertising",
            "Advanced funnel strategy",
            "Retargeting",
            "Conversion optimization",
            "Advanced analytics",
            "Campaign automation",
            "Growth strategy",
          ],
        },
      },
  
      "creative-branding": {
        title: "Creative & Branding",
        category: "Brand",
        description:
          "Create a distinctive visual identity that makes your business recognizable.",
        basic: {
          name: "Basic",
          price: "Starting from ₹XX,XXX",
          description:
            "Essential branding for new businesses and small brands.",
          features: [
            "Logo design",
            "Basic color palette",
            "Typography",
            "Basic brand direction",
            "Social profile assets",
          ],
        },
        medium: {
          name: "Medium",
          price: "Starting from ₹XX,XXX",
          description:
            "A complete brand identity designed for growing businesses.",
          features: [
            "Logo system",
            "Brand colors",
            "Typography system",
            "Social media templates",
            "Brand guidelines",
            "Marketing creatives",
          ],
          popular: true,
        },
        custom: {
          name: "Custom",
          price: "Let's discuss",
          description:
            "A complete creative system built specifically around your brand.",
          features: [
            "Full brand identity",
            "Visual strategy",
            "Brand guidelines",
            "Campaign creative",
            "Marketing collateral",
            "Packaging / assets",
            "Ongoing creative support",
          ],
        },
      },
  
      "growth-strategy": {
        title: "Growth & Strategy",
        category: "Strategy",
        description:
          "Clear digital and business strategies designed to help you identify opportunities and grow.",
        basic: {
          name: "Basic",
          price: "Starting from ₹XX,XXX",
          description:
            "A focused strategy session for businesses looking for direction.",
          features: [
            "Business review",
            "Digital audit",
            "Competitor overview",
            "Growth opportunities",
            "Action plan",
          ],
        },
        medium: {
          name: "Medium",
          price: "Starting from ₹XX,XXX",
          description:
            "A structured growth roadmap for businesses ready to scale.",
          features: [
            "Market research",
            "Competitor analysis",
            "Digital strategy",
            "Growth roadmap",
            "Customer journey",
            "Conversion strategy",
            "Performance framework",
          ],
          popular: true,
        },
        custom: {
          name: "Custom",
          price: "Let's discuss",
          description:
            "A long-term strategic partnership built around your growth goals.",
          features: [
            "Complete growth strategy",
            "Market positioning",
            "Business roadmap",
            "Digital transformation",
            "Technology planning",
            "AI & automation opportunities",
            "Ongoing strategy support",
          ],
        },
      },
    };
  
    const service = serviceData[serviceId];
  
    if (!service) {
      return (
        <>
          <Navbar />
  
          <div style={{ padding: "180px 30px", textAlign: "center" }}>
            <h1>Service not found</h1>
  
            <Link to="/services">
              Back to Services
            </Link>
          </div>
  
          <Footer />
        </>
      );
    }
  
    const packages = [
      service.basic,
      service.medium,
      service.custom,
    ];
  
    return (
      <div className="service-detail-page">
        <style>{`
          .service-detail-page {
            --blue: #69b2e6;
            --blue-dark: #2f79a8;
            --blue-soft: #edf7fc;
            --text: #111418;
            --soft: #5d6872;
            --line: rgba(17, 20, 24, 0.09);
            --navy: #0c1217;
            background: #fff;
            color: var(--text);
            overflow: hidden;
          }
  
          .service-detail-container {
            width: min(1180px, calc(100% - 48px));
            margin: auto;
          }
  
          .service-detail-hero {
            padding: 100px 0 85px;
            background:
              radial-gradient(
                circle at 85% 20%,
                rgba(105,178,230,.18),
                transparent 30%
              ),
              linear-gradient(
                135deg,
                #fff,
                #f5fbff
              );
          }
  
          .service-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--soft);
            text-decoration: none;
            font-size: 13px;
            margin-bottom: 45px;
          }
  
          .service-back:hover {
            color: var(--blue-dark);
          }
  
          .service-detail-category {
            color: var(--blue-dark);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: .14em;
            text-transform: uppercase;
          }
  
          .service-detail-hero h1 {
            max-width: 900px;
            margin: 15px 0 20px;
            font-size: clamp(48px, 7vw, 82px);
            line-height: .98;
            letter-spacing: -.055em;
          }
  
          .service-detail-description {
            max-width: 700px;
            margin: 0;
            color: var(--soft);
            font-size: 18px;
            line-height: 1.75;
          }
  
          .packages-section {
            padding: 95px 0 115px;
          }
  
          .packages-header {
            max-width: 700px;
            margin-bottom: 45px;
          }
  
          .packages-header span {
            color: var(--blue-dark);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: .14em;
            text-transform: uppercase;
          }
  
          .packages-header h2 {
            margin: 12px 0;
            font-size: clamp(38px, 5vw, 60px);
            letter-spacing: -.045em;
            line-height: 1;
          }
  
          .packages-header p {
            color: var(--soft);
            line-height: 1.7;
          }
  
          .service-packages {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
  
          .service-package {
            position: relative;
            display: flex;
            flex-direction: column;
            min-height: 510px;
            padding: 32px;
            border: 1px solid var(--line);
            border-radius: 24px;
            background: #fff;
            transition: .3s ease;
          }
  
          .service-package:hover {
            transform: translateY(-7px);
            border-color: rgba(105,178,230,.4);
            box-shadow: 0 25px 65px rgba(30,70,95,.09);
          }
  
          .service-package.popular {
            border: 1.5px solid var(--blue);
            background: linear-gradient(
              180deg,
              #edf7fc,
              #fff 40%
            );
          }
  
          .package-popular {
            position: absolute;
            top: -13px;
            left: 28px;
            padding: 6px 12px;
            border-radius: 999px;
            background: var(--blue);
            color: var(--navy);
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: .08em;
          }
  
          .package-name {
            font-size: 28px;
            font-weight: 750;
            letter-spacing: -.035em;
          }
  
          .package-price {
            margin: 17px 0;
            color: var(--blue-dark);
            font-size: 17px;
            font-weight: 750;
          }
  
          .package-description {
            min-height: 75px;
            margin: 0 0 25px;
            color: var(--soft);
            font-size: 14px;
            line-height: 1.7;
          }
  
          .package-divider {
            height: 1px;
            background: var(--line);
            margin-bottom: 23px;
          }
  
          .package-feature-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 0;
            padding: 0;
            list-style: none;
            flex: 1;
          }
  
          .package-feature {
            display: flex;
            gap: 9px;
            align-items: flex-start;
            color: #46515a;
            font-size: 13px;
            line-height: 1.45;
          }
  
          .package-feature svg {
            color: var(--blue-dark);
            flex-shrink: 0;
            margin-top: 2px;
          }
  
          .package-connect {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            min-height: 49px;
            margin-top: 28px;
            border-radius: 999px;
            background: var(--blue-soft);
            border: 1px solid rgba(105,178,230,.25);
            color: var(--text);
            text-decoration: none;
            font-size: 13px;
            font-weight: 750;
            transition: .25s ease;
          }
  
          .service-package.popular .package-connect {
            background: var(--navy);
            color: #fff;
            border-color: var(--navy);
          }
  
          .package-connect:hover {
            transform: translateY(-2px);
          }
  
          .login-note {
            margin-top: 28px;
            padding: 18px 22px;
            border-radius: 16px;
            background: var(--blue-soft);
            border: 1px solid rgba(105,178,230,.2);
            color: var(--soft);
            font-size: 13px;
            line-height: 1.6;
            text-align: center;
          }
  
          .login-note strong {
            color: var(--text);
          }
  
          .service-detail-cta {
            padding: 100px 0;
            background: var(--navy);
            color: white;
            text-align: center;
          }
  
          .service-detail-cta-inner {
            max-width: 760px;
            margin: auto;
          }
  
          .service-detail-cta h2 {
            margin: 12px 0 18px;
            font-size: clamp(40px, 6vw, 65px);
            line-height: 1;
            letter-spacing: -.05em;
          }
  
          .service-detail-cta p {
            margin: 0 auto 30px;
            max-width: 600px;
            color: #aab6bf;
            line-height: 1.7;
          }
  
          .service-detail-cta a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 15px 23px;
            border-radius: 999px;
            background: var(--blue);
            color: var(--navy);
            text-decoration: none;
            font-weight: 750;
            font-size: 14px;
          }
  
          @media (max-width: 950px) {
            .service-packages {
              grid-template-columns: 1fr;
              max-width: 650px;
            }
  
            .service-package {
              min-height: auto;
            }
          }
  
          @media (max-width: 600px) {
            .service-detail-container {
              width: min(100% - 32px, 1180px);
            }
  
            .service-detail-hero {
              padding: 75px 0;
            }
  
            .service-detail-hero h1 {
              font-size: 48px;
            }
  
            .packages-section {
              padding: 75px 0;
            }
  
            .service-package {
              padding: 27px;
            }
          }
        `}</style>
  
        <Navbar />
  
        <main>
          <section className="service-detail-hero">
            <div className="service-detail-container">
              <Link
                to="/services"
                className="service-back"
              >
                <ArrowLeft size={16} />
                Back to Services
              </Link>
  
              <div className="service-detail-category">
                {service.category}
              </div>
  
              <h1>{service.title}</h1>
  
              <p className="service-detail-description">
                {service.description}
              </p>
            </div>
          </section>
  
          <section className="packages-section">
            <div className="service-detail-container">
              <div className="packages-header">
                <span>Choose Your Package</span>
  
                <h2>
                  Find the right level
                  <br />
                  for your business.
                </h2>
  
                <p>
                  Start with what you need today and upgrade or customize your
                  solution as your business grows.
                </p>
              </div>
  
              <div className="service-packages">
                {packages.map((pkg) => (
                  <article
                    className={`service-package ${
                      pkg.popular ? "popular" : ""
                    }`}
                    key={pkg.name}
                  >
                    {pkg.popular && (
                      <div className="package-popular">
                        <Sparkles size={11} />
                        Most Popular
                      </div>
                    )}
  
                    <div className="package-name">
                      {pkg.name}
                    </div>
  
                    <div className="package-price">
                      {pkg.price}
                    </div>
  
                    <p className="package-description">
                      {pkg.description}
                    </p>
  
                    <div className="package-divider" />
  
                    <ul className="package-feature-list">
                      {pkg.features.map((feature) => (
                        <li
                          className="package-feature"
                          key={feature}
                        >
                          <Check size={15} strokeWidth={2.5} />
                          {feature}
                        </li>
                      ))}
                    </ul>
  
                    {/* Login is required before connecting */}
                    <Link
                      to={`/login?service=${serviceId}&package=${pkg.name}`}
                      className="package-connect"
                    >
                      Connect with VELQOR
                      <ArrowUpRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
  
              <div className="login-note">
                <strong>Login required.</strong> Create or sign in to your VELQOR
                account before connecting with a service or package.
              </div>
            </div>
          </section>
  
          <section className="service-detail-cta">
            <div className="service-detail-container service-detail-cta-inner">
              <div
                style={{
                  color: "#9ed5f2",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Need Something Different?
              </div>
  
              <h2>
                Let's build it around you.
              </h2>
  
              <p>
                If none of the packages perfectly match your requirements, tell
                us what you need and we'll create a custom solution.
              </p>
  
              <Link to="/login">
                Login & Start a Conversation
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </section>
        </main>
  
        <Footer />
      </div>
    );
  }
  
  export default ServiceDetail;