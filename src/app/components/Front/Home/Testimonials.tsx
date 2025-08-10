"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2].map((review) => (
          <Card key={review}>
            <CardHeader className="flex items-center gap-4">
              <Star className="text-yellow-400" />
              <CardTitle>5.0 Stars</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                “Carwow made it so easy to find my dream car at a great price.”
              </p>
              <p className="mt-2 font-semibold">— Alex Johnson</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
