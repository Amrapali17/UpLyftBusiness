import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/:serviceId"
          element={<ServiceDetail />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/process"
          element={<Process />}
        />

        <Route
          path="/industries"
          element={<Industries />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/enquire"
          element={<Enquire />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;