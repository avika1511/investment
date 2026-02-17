import Membership from "../components/Membership"; 
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import heroImg from "../assets/hero.png";
import analystImg from "../assets/analyst.jpg";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 md:px-20 py-16 sm:py-20 md:py-24 bg-linear-to-br from-white via-green-50 to-white">
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Aapka Investment,<br />
            <span className="text-green-600">Hamari Expertise!</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Secure aur profitable trading decisions expert research ke saath.
          </p>

          <button
            onClick={() =>
              (window.location.href =
                "https://zerodha.com/open-account/")
            }
            className="bg-green-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full 
                       shadow-lg hover:shadow-xl 
                       hover:scale-105 transition duration-300 text-sm sm:text-base"
          >
            Open Account
          </button>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <img
            src={heroImg}
            alt="Trading"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* INSIGHTS SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-10 sm:gap-14 md:gap-16 px-5 sm:px-8 md:px-20 py-16 sm:py-20 md:py-24 bg-white">
        
        <div className="w-full md:w-1/2">
          <img
            src={analystImg}
            alt="Analyst"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500 w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Invest with <span className="text-green-600">Highly Accurate Insights</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Expert research, portfolio management aur deep market knowledge ke saath grow karein.
          </p>
        </div>
      </section>

      <Membership />
      <Reviews />
      <FAQ />
    </>
  );
}

export default Home;
