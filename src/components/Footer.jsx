import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import qr from "../assets/qr.png"; // 👈 QR import added

function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-6">
      
      {/* ===== PROMO SECTION ===== */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Register Right Now & Get The Special Promo
        </h2>

        <p className="text-gray-600 mb-8">
          Sign-in & Get 3-days Free Demo Account
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={() =>
              (window.location.href =
                "https://zerodha.com/open-account/")
            }
            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
          >
            Open Account
          </button>

          <button
            onClick={() =>
              (window.location.href = "/contact")
            }
            className="bg-green-200 text-green-700 px-8 py-3 rounded-full hover:bg-green-300 transition"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* ===== FOOTER CONTENT ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 border-t pt-10">

        {/* COMPANY INFO */}
        <div>
          <span className="inline-block bg-green-500 text-white px-3 py-1 rounded text-sm mb-4">
            SEBI Registered
          </span>

          <p className="text-gray-600 mb-4 leading-relaxed">
            213, Shivranjani Residency,<br />
            Bhagvati Circle, Kaliyabid,<br />
            BHAVNAGAR, GUJARAT, 360578
          </p>

          <p className="text-gray-600 mb-6">
            Email: service@investment.in
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-xl text-gray-700">
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
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-green-500">Home</a></li>
            <li><a href="/about" className="hover:text-green-500">About</a></li>
            <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
            <li><a href="/complaint" className="hover:text-green-500">Complaint Board</a></li>
          </ul>
        </div>

        {/* QR CODE SECTION 👇 Added */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold mb-4">Scan QR</h4>
          <img
            src={qr}
            alt="QR Code"
            className="w-32 h-32 object-contain"
          />
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © 2026 Investment. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
