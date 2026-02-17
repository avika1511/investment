import analystImg from "../assets/analyst.jpg";
import { FaShieldAlt, FaCheckCircle, FaCertificate, FaLock } from "react-icons/fa";

function About() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-16 bg-linear-to-br from-gray-50 via-white to-green-50 min-h-screen flex items-center">
      
      <div className="max-w-6xl mx-auto w-full">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-10 md:mb-12 text-center text-gray-800 tracking-tight">
          About Investment
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src={analystImg}
              alt="About"
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500 w-full h-auto"
            />
          </div>

          {/* CONTENT BOX */}
          <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Investment provides professional stock market research and advisory
              services designed to help investors make informed decisions with
              confidence and clarity.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Hamara mission hai investors ko accurate guidance, risk management
              strategies aur profitable opportunities provide karna so that they
              can grow their capital safely.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              SEBI compliant research aur transparent approach ke saath hum
              long-term wealth creation par focus karte hain, jahan trust aur
              performance dono equally important hote hain.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm md:text-base font-medium text-green-700">
                ✔ Expert Market Analysis
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm md:text-base font-medium text-green-700">
                ✔ Real-Time Trading Calls
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm md:text-base font-medium text-green-700">
                ✔ Risk Managed Strategies
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm md:text-base font-medium text-green-700">
                ✔ Dedicated Support Team
              </div>
            </div>

            {/* TRUST LINE */}
            <p className="text-gray-500 text-sm md:text-base mb-6">
              Thousands of traders trust our research insights for consistent
              performance and disciplined trading decisions.
            </p>

            {/* BADGES */}
            <div>
              <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-4 text-center md:text-left">
                Trusted & Certified
              </h4>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">

                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm text-sm text-gray-700">
                  <FaShieldAlt className="text-green-500" />
                  SEBI Registered
                </div>

                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm text-sm text-gray-700">
                  <FaCertificate className="text-green-500" />
                  ISO Certified
                </div>

                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm text-sm text-gray-700">
                  <FaCheckCircle className="text-green-500" />
                  Trusted Advisors
                </div>

                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm text-sm text-gray-700">
                  <FaLock className="text-green-500" />
                  Secure Platform
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
