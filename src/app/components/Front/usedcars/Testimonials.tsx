export default function Testimonials() {
    const testimonials = [
      {
        name: "Thabo M.",
        quote:
          "I sold my bakkie for R12,000 more than the dealer offered. Payment was in my account the same day.",
      },
      {
        name: "Karen P.",
        quote:
          "So easy! I just entered my VIN, uploaded photos, and my car was sold in 2 days.",
      },
    ]
  
    return (
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What our customers say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gray-50 shadow text-left"
              >
                <p className="text-gray-600 italic mb-4">&quot;{t.quote}&quot;</p>
                <div className="font-semibold">- {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  