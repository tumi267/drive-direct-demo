"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-primary text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
      <p className="mt-4 text-lg">Join thousands of happy drivers today.</p>
      <Button size="lg" variant="secondary" className="mt-6 gap-2">
        Sign Up Now <ArrowRight size={18} />
      </Button>
    </section>
  );
}
