import FeaturedDealCard from "./FeaturedDealCard"

const deals = [
  { title: "Audi Q4 e-tron", subtitle: "Save over 20%", image: "" },
  { title: "MG4", subtitle: "Save nearly 20%", image: "" },
  { title: "Audi Q7", subtitle: "Save over £17,000", image: "" },
]

export default function FeaturedDealsSection() {
  return (
    <section className="container py-12 ml-auto mr-auto">
      <h2 className="text-2xl font-bold mb-6">Our pick of the best deals</h2>
      <div className="grid grid-cols-1 mr-auto ml-auto gap-6">
        {deals.map((deal) => (
          <FeaturedDealCard key={deal.title} {...deal} />
        ))}
      </div>
    </section>
  )
}
