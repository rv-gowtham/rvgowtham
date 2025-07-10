import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/pages/Hero/Hero";
import About from "./components/pages/About/About";
import Service from "./components/pages/Service/Service";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import ScrollToTop from "d:/profile/src/ScrollToTop";

function App() {
  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout page={<Hero />} />} />
            <Route path="/about" element={<Layout page={<About />} />} />
            <Route path="/service" element={<Layout page={<Service />} />} />
            <Route
              path="/portfolio"
              element={<Layout page={<Portfolio />} />}
            />
            <Route path="/contact" element={<Layout page={<Contact />} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
