export default function FAQ() {
    const faqs = [
      {
        q: "Do I need my car’s papers?",
        a: "Yes, you’ll need proof of ownership and a valid roadworthy certificate.",
      },
      {
        q: "What if I don’t know my VIN?",
        a: "You can find it on your licence disc, inside the driver’s door, or on your registration papers.",
      },
      {
        q: "How long does the process take?",
        a: "Most cars are sold within 48 hours.",
      },
    ]
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  