export default function HowItWorks() {
    const steps = [
      {
        title: "Get an instant valuation",
        desc: "Enter your VIN & mileage, get an estimated market price in Rands.",
      },
      {
        title: "Get it sold",
        desc: "Upload photos, we’ll list it to 2,000+ verified South African dealers.",
      },
      {
        title: "Get paid fast",
        desc: "Dealer collects for free and pays instantly via EFT.",
      },
    ]
  
    return (
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow">
                <div className="text-2xl font-bold mb-2">{idx + 1}.</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }