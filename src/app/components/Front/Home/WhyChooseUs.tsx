import { Car, DollarSign, ShieldCheck } from "lucide-react";

const features = [
  { icon: Car, title: "Wide selection", text: "Browse hundreds of cars from trusted dealers." },
  { icon: DollarSign, title: "Best prices", text: "We find you the most competitive deals." },
  { icon: ShieldCheck, title: "Trusted dealers", text: "Only verified and reputable sellers." },
];

export default function WhyChooseUs() {
  return (
    <section className="container py-12 w-[90vw] ml-auto mr-auto">
      <h2 className="text-2xl font-bold mb-8">Why choose us?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-sm:flex overflow-x-auto scrollbar-hide">
        {features.map((f) => (
          <div key={f.title} className="text-center max-sm:w-20">
            <f.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 " />
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
