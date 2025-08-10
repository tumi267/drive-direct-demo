export default function ValueProps() {
    const values = [
      {
        title: "Worth the money",
        desc: "Get on average R15,000 more than trade-in offers.",
      },
      {
        title: "Worth your time",
        desc: "Same day payment and free collection at a time which suits you.",
      },
      {
        title: "Worth the support",
        desc: "Your own selling checklist and specialist guides at your fingertips.",
      },
    ]
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Make your sale worth it</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl shadow bg-white">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  