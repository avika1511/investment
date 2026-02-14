import { Link } from "react-router-dom";
import { useState } from "react"; // ✅ added
import logo from "../assets/logo.png"; // 👈 import logo

function Navbar() {
  const [open, setOpen] = useState(false); // ✅ added state

  const openZerodha = () => {
    window.location.href = "https://zerodha.com/open-account/";
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      
      {/* Logo Instead of H1 */}
      <img 
        src={logo} 
        alt="Investment Logo"
        className="h-10 w-auto object-contain cursor-pointer"
      />

      {/* ✅ Mobile Menu Button (added) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className="hidden md:flex gap-8 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/complaint">Complaint</Link>
      </nav>

      <button
        onClick={openZerodha}
        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
      >
        Open Account
      </button>

      {/* ✅ Mobile Menu Dropdown (added) */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <Link to="/complaint" onClick={()=>setOpen(false)}>Complaint</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
