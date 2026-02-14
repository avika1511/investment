import Membership from "../components/Membership";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import heroImg from "../assets/hero.png";
import analystImg from "../assets/analyst.jpg";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 bg-linear-to-br from-white via-green-50 to-white">
        
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Aapka Investment,<br />
            <span className="text-green-600">Hamari Expertise!</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Secure aur profitable trading decisions expert research ke saath.
          </p>

          <button
            onClick={() =>
              (window.location.href =
                "https://zerodha.com/open-account/")
            }
            className="bg-green-600 text-white px-10 py-4 rounded-full 
                       shadow-lg hover:shadow-xl 
                       hover:scale-105 transition duration-300"
          >
            Open Account
          </button>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src={heroImg}
            alt="Trading"
            className="w-full max-w-xl mx-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* INSIGHTS SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-16 px-8 md:px-20 py-24 bg-white">
        
        <div className="md:w-1/2">
          <img
            src={analystImg}
            alt="Analyst"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Invest with <span className="text-green-600">Highly Accurate Insights</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
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
