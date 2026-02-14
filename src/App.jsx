import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";   // ✅ ADD THIS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/CONTACAT";
import Complaint from "./pages/Complaint";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
