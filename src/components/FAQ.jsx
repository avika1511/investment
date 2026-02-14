import { useState } from "react";

function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "How are calls generated?",
      a: "Using technical analysis & market research.",
    },
    {
      q: "Do you provide intraday calls?",
      a: "Yes, both intraday & positional calls.",
    },
    {
      q: "Is support available?",
      a: "Yes, dedicated support for members.",
    },
  ];

  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        FAQs
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg p-5 mb-4 bg-white cursor-pointer shadow-sm"
          onClick={() =>
            setActive(active === index ? null : index)
          }
        >
          <div className="flex justify-between font-semibold">
            {faq.q}
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && (
            <p className="mt-3 text-gray-600">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
