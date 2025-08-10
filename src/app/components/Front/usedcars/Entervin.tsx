"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SellMyCarHero() {
  const [vin, setVin] = useState("")

  const handleSubmit = () => {
    // API call for VIN lookup
    console.log("Submitted VIN:", vin)
  }

  return (
    <section className="bg-gray-50 py-12 text-center">
      <h1 className="text-4xl font-bold mb-2">Sell Your Car in South Africa</h1>
      <p className="text-lg text-gray-600 mb-6">
        Hurry, it’s a seller’s market right now!
      </p>

      <div className="flex justify-center gap-2 max-w-lg mx-auto mb-4">
        <Input
          placeholder="Enter your VIN number"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSubmit}>Get My Free Valuation</Button>
      </div>

      <p className="text-sm text-gray-500">
        Rated 4.5/5 from 12,304 South African drivers
      </p>
    </section>
  )
}
