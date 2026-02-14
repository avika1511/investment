import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // 👈 import logo

function Navbar() {
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
    </header>
  );
}

export default Navbar;