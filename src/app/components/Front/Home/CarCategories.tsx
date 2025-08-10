import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  { name: "Electric", image: "/images/electric.jpg" },
  { name: "SUV", image: "/images/suv.jpg" },
  { name: "Hybrid", image: "/images/hybrid.jpg" },
  { name: "Hatchback", image: "/images/hatchback.jpg" },
];

export default function CarCategories() {
  return (
    <section className="container py-12 w-[90vw] ml-auto mr-auto">
      <h2 className="text-2xl font-bold mb-8 ">Browse by car type</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-sm:flex overflow-x-auto scrollbar-hide max-sm:w-[100vw]">
        {categories.map((cat) => (
          <Card key={cat.name} className="overflow-hidden hover:shadow-lg transition">
            <CardHeader className="p-0">
              <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-center">{cat.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
