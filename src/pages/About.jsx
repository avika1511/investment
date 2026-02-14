import analystImg from "../assets/analyst.jpg";

function About() {
  return (
    <section className="py-24 px-8 md:px-16 bg-linear-to-br from-gray-50 via-white to-green-50 min-h-screen flex items-center">
      
      <div className="max-w-6xl mx-auto w-full">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-gray-800 tracking-tight">
          About Invetment
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="md:w-1/2">
            <img
              src={analystImg}
              alt="About"
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500"
            />
          </div>

          <div className="md:w-1/2 bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-gray-100">
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Investment provides professional stock market research
              and advisory services.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hamara mission hai investors ko accurate guidance
              aur profitable strategies dena.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              SEBI compliant research aur transparent approach ke saath
              hum long-term wealth creation par focus karte hain.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
