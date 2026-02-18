import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const openZerodha = () => {
    window.location.href = "https://zerodha.com/open-account/";
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        className="md:hidden text-2xl font-bold"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 lg:gap-8 font-medium text-sm lg:text-base">
        <Link className="hover:text-primary transition" to="/">Home</Link>
        <Link className="hover:text-primary transition" to="/about">About</Link>
        <Link className="hover:text-primary transition" to="/contact">Contact</Link>
        <Link className="hover:text-primary transition" to="/complaint">Complaint</Link>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-4 top-16 sm:top-20 w-44 
          bg-white/30 backdrop-blur-2xl backdrop-saturate-150
          border border-white/40 
          shadow-2xl rounded-2xl 
          flex flex-col items-end gap-2 
          p-4 md:hidden text-base 
          animate-fadeIn"
        >
          <Link className="w-full text-right px-3 py-2 rounded-lg text-green-600 hover:bg-white/40 transition" to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link className="w-full text-right px-3 py-2 rounded-lg text-green-600 hover:bg-white/40 transition" to="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link className="w-full text-right px-3 py-2 rounded-lg text-green-600 hover:bg-white/40 transition" to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <Link className="w-full text-right px-3 py-2 rounded-lg text-green-600 hover:bg-white/40 transition" to="/complaint" onClick={()=>setOpen(false)}>Complaint</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
