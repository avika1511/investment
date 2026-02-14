function Complaint() {
  return (
    <section className="py-20 px-6 bg-linear-to-br from-red-50 via-gray-50 to-red-100 min-h-screen flex items-center">
      
      <div className="max-w-3xl mx-auto w-full bg-white/90 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-red-100 transition-all duration-300 hover:shadow-red-200">

        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Complaint Board
        </h1>

        <form className="space-y-8">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none transition duration-300 shadow-sm"
          />

          <input
            type="text"
            placeholder="Client ID"
            className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none transition duration-300 shadow-sm"
          />

          <textarea
            placeholder="Describe your issue"
            rows="4"
            className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none transition duration-300 shadow-sm resize-none"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-4 rounded-full font-semibold tracking-wide hover:bg-red-600 hover:scale-[1.02] transition-all duration-300 shadow-md"
          >
            Submit Complaint
          </button>

        </form>

      </div>
    </section>
  );
}

export default Complaint;
