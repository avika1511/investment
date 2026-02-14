import { useEffect, useState } from "react";

function Reviews() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Day Trader",
      text: "Excellent research & portfolio growth. Invest2Gain helped me trade confidently.",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Priya Mehta",
      role: "Entrepreneur",
      text: "Very accurate calls and professional support system.",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Amit Verma",
      role: "Investor",
      text: "My portfolio performance improved significantly after joining.",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Sneha Kapoor",
      role: "Swing Trader",
      text: "Best advisory platform with transparent strategies.",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "Vikram Singh",
      role: "Financial Consultant",
      text: "Highly professional research backed by solid analysis.",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Kavita Malhotra",
      role: "Business Owner",
      text: "Reliable trading calls and responsive customer support.",
      image: "https://i.pravatar.cc/100?img=6",
    },
  ];

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(3); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev >= reviews.length - visibleCards ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [reviews.length, visibleCards]);

  return (
    <section className="py-20 md:py-28 bg-white text-center overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 md:mb-16 tracking-tight">
        Trusted by Traders
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="shrink-0 px-4"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <div
                className="bg-linear-to-br from-green-50 to-green-200
                           rounded-2xl shadow-lg
                           min-h-80
                           p-6 md:p-8
                           border border-green-200
                           hover:border-green-600
                           flex flex-col items-center justify-center
                           hover:scale-105 transition duration-500"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-4 border-4 border-white shadow-md"
                />

                <h4 className="text-lg md:text-xl font-bold text-gray-800">
                  {review.name}
                </h4>

                <p className="text-green-700 text-sm font-medium mb-3">
                  {review.role}
                </p>

                <div className="text-yellow-400 mb-4 text-sm">
                  ★★★★★
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
