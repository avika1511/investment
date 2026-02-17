import { useState } from "react";

function CONTACAT() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    e.target.reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  };

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-linear-to-br from-green-50 via-white to-green-100 min-h-screen flex items-center">
      
      <div className="max-w-3xl mx-auto w-full bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-green-100 transition-all duration-300 hover:shadow-green-200">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-gray-800">
          Contact Us
        </h1>

        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition duration-300 shadow-sm text-sm sm:text-base"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition duration-300 shadow-sm text-sm sm:text-base"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition duration-300 shadow-sm resize-none text-sm sm:text-base"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 sm:py-4 rounded-full font-semibold tracking-wide hover:bg-green-600 hover:scale-[1.02] transition-all duration-300 shadow-md text-sm sm:text-base"
          >
            Send Message
          </button>

        </form>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn"></div>

          <div className="relative bg-white px-6 sm:px-10 py-6 sm:py-8 rounded-3xl shadow-2xl border border-green-200 animate-[scaleIn_.4s_ease] text-center max-w-sm w-full">

            <div className="text-green-500 text-4xl sm:text-5xl mb-4 animate-bounce">
              ✔
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Message Sent!
            </h2>

            <p className="text-gray-600 text-sm sm:text-base">
              We'll get back to you soon.
            </p>

          </div>
        </div>
      )}

      <style>
        {`
        @keyframes scaleIn {
          0% { transform: scale(.7); opacity:0 }
          100% { transform: scale(1); opacity:1 }
        }
        @keyframes fadeIn {
          from { opacity:0 }
          to { opacity:1 }
        }
        .animate-fadeIn{
          animation: fadeIn .3s ease;
        }
        `}
      </style>

    </section>
  );
}

export default CONTACAT;
