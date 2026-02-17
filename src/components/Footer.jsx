import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import qr from "../assets/qr.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 pt-12 sm:pt-16 pb-8 px-4 sm:px-6">
      
      {/* ===== PROMO SECTION ===== */}
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Register Right Now & Get The Special Promo
        </h2>

        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Sign-in & Get 3-days Free Demo Account
        </p>

        <div className="flex justify-center gap-4 sm:gap-6 flex-col sm:flex-row items-center">
          <button
            onClick={() =>
              (window.location.href =
                "https://zerodha.com/open-account/")
            }
            className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-green-600 transition w-full sm:w-auto"
          >
            Open Account
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="bg-green-200 text-green-700 px-6 sm:px-8 py-3 rounded-full hover:bg-green-300 transition w-full sm:w-auto"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* ===== FOOTER CONTENT ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 border-t pt-8 sm:pt-10">

        {/* COMPANY INFO */}
        <div className="text-center sm:text-left">
          <span className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs sm:text-sm mb-4">
            SEBI Registered
          </span>

          <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
            213, Shivranjani Residency,<br />
            Bhagvati Circle, Kaliyabid,<br />
            BHAVNAGAR, GUJARAT, 360578
          </p>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Email: service@investment.in
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center sm:justify-start gap-4 text-lg sm:text-xl text-gray-700">
            <a href="#" className="hover:text-green-500">
              <FaWhatsapp />
            </a>

            <a href="#" className="hover:text-green-500">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-green-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center sm:text-left">
          <h4 className="font-bold mb-4 text-sm sm:text-base">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
            <li><Link to="/" className="hover:text-green-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
            <li><Link to="/complaint" className="hover:text-green-500">Complaint Board</Link></li>
          </ul>
        </div>

        {/* QR CODE SECTION */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold mb-4 text-sm sm:text-base">Scan QR</h4>
          <img
            src={qr}
            alt="QR Code"
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
          />
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-10 sm:mt-12 text-xs sm:text-sm">
        © 2026 Investment. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
