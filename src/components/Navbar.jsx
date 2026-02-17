import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openZerodha = () => {
    window.location.href = "https://zerodha.com/open-account/";
  };

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <img 
        src={logo} 
        alt="Investment Logo"
        className="h-8 sm:h-10 w-auto object-contain cursor-pointer"
      />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 lg:gap-8 font-medium text-sm lg:text-base">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/complaint">Complaint</Link>
      </nav>

      {/* CTA Button */}
      <button
        onClick={openZerodha}
        className="hidden sm:block bg-primary text-white px-4 sm:px-6 py-2 rounded-full hover:bg-green-600 transition text-sm sm:text-base"
      >
        Open Account
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-16 sm:top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden text-base">
          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <Link to="/complaint" onClick={()=>setOpen(false)}>Complaint</Link>

          {/* Mobile CTA */}
          <button
            onClick={openZerodha}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            Open Account
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
