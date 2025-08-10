"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FeaturedCars() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Deals</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((car) => (
          <Card key={car} className="overflow-hidden">
            {/* <Image
              src={`https://source.unsplash.com/600x400/?car,${car}`}
              alt="Car"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            /> */}
            <CardHeader>
              <CardTitle>Audi A4 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">From $28,500</p>
              <Button className="mt-4 w-full">View Offer</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
