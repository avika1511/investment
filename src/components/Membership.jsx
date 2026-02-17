function Membership() {
  const plans = [
    {
      name: "Basic",
      price: "₹50,000",
      features: ["Equity Trades", "Daily Calls", "Email Support"],
    },
    {
      name: "Medium",
      price: "₹2,00,000",
      highlight: true,
      features: ["Equity + F&O", "Daily Calls", "RM Support"],
    },
    {
      name: "Pro",
      price: "₹5,00,000",
      features: ["All Segments", "Portfolio Mgmt", "Dedicated RM"],
    },
  ];

  const handleRedirect = () => {
    window.open("https://zerodha.com/open-account/", "_blank");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 text-center bg-linear-to-br from-green-50 via-white to-green-100">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 tracking-tight text-gray-800">
        Investment Plans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-4 sm:px-6 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl 
            h-full hover:scale-[1.06] hover:shadow-green-200 
            transition duration-500 border hover:border-green-500 border-gray-100"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
              {plan.name}
            </h3>

            <p className="text-green-600 text-base sm:text-lg font-semibold mb-6 sm:mb-8">
              Min Capital {plan.price}
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <span className="text-green-500 font-bold">✔</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={handleRedirect}
              className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-green-600 hover:scale-105 transition duration-300 shadow-md w-full sm:w-auto"
            >
              Open Account
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membership;
