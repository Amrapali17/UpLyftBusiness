
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Login from "./pages/Login";
import Work from "./pages/Work";
import Process from "./pages/Process";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Enquire from "./pages/Enquire";

import AdminDashboard from "./admin/AdminDashboard";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./ScrollToTop";

import "./App.css";
import "./responsive.css";
import "./hover-effects.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Website routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:serviceId"
          element={<ServiceDetail />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquire" element={<Enquire />} />

        {/* Admin dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Floating WhatsApp button on every route */}
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;
