import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100 py-20 w-[90vw] max-sm:w-[80%] shadow-sm mr-auto ml-auto ">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your perfect car, stress-free
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Compare offers from trusted dealers and get the best price.
        </p>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          Start your search
        </Button>
      </div>
    </section>
  );
}
