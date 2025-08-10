"use client";

import { Search, DollarSign, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
      <div className="grid gap-10 sm:grid-cols-3 max-w-5xl mx-auto">
        <div className="text-center">
          <Search className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h3 className="font-semibold">1. Search</h3>
          <p className="text-gray-600 text-sm">
            Find the car you want from our extensive listings.
          </p>
        </div>
        <div className="text-center">
          <DollarSign className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h3 className="font-semibold">2. Compare</h3>
          <p className="text-gray-600 text-sm">
            Get offers from trusted dealers near you.
          </p>
        </div>
        <div className="text-center">
          <CheckCircle className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h3 className="font-semibold">3. Drive</h3>
          <p className="text-gray-600 text-sm">
            Pick the best deal and drive away happy.
          </p>
        </div>
      </div>
    </section>
  );
}
