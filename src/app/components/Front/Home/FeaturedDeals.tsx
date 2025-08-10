import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const deals = [
  { title: "Tesla Model 3", price: "£39,990", image: "/images/tesla.jpg" },
  { title: "BMW X5", price: "£59,990", image: "/images/bmw.jpg" },
  { title: "Audi A3", price: "£25,990", image: "/images/audi.jpg" },
];

export default function FeaturedDeals() {
  return (
    <section className="py-12 w-[90vw] ml-auto mr-auto ">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Big deals on wheels</h2>
        <div className="grid md:grid-cols-3 gap-6 max-sm:flex overflow-x-auto scrollbar-hide w-[100%]">
          {deals.map((deal) => (
            <Card key={deal.title} className="hover:shadow-lg transition">
              <CardHeader className="p-0">
                <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{deal.title}</CardTitle>
                <p className="text-blue-600 font-semibold">{deal.price}</p>
                <Button className="mt-4 w-full">View offer</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
