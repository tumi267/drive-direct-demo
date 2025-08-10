"use client"

import { useState } from "react"
import FilterBar from "./FilterBar"
import CarDealCard from "./CarDealCard"

const carDeals = [
  {
    name: "Tesla Model 3",
    type: ["Hybrid & electric cars", "Saloons"],
    tagline: "A high-tech electric car that’s very quick",
    rating: "9",
    reviewLink: "#",
    price: "From £39,990",
    leasePrice: "Lease from £301* / month",
    image: "/images/tesla-model-3.jpg",
  },
  {
    name: "Renault Clio",
    type: ["Small cars", "Hatchbacks"],
    tagline: "Big-booted supermini with a posh cabin",
    rating: "9",
    reviewLink: "#",
    price: "From £16,646",
    leasePrice: "Lease from £195* / month",
    image: "/images/renault-clio.jpg",
  },
  {
    name: "Volkswagen Golf GTI",
    type: ["Small cars", "Hatchbacks"],
    tagline: "The classic hot hatch",
    rating: "7",
    reviewLink: "#",
    price: "From £37,401",
    leasePrice: "Lease from £339* / month",
    image: "/images/vw-golf-gti.jpg",
  },
  // ...more cars
]

export default function CarDealList() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["All"])

  const handleFilterChange = (filter: string) => {
    if (filter === "All") {
      setActiveFilters(["All"])
      return
    }

    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter) // remove filter if clicked again
        : [...prev.filter((f) => f !== "All"), filter] // add filter, remove "All"
    )
  }

  const filteredDeals =
    activeFilters.includes("All")
      ? carDeals
      : carDeals.filter((deal) =>
          deal.type.some((t) => activeFilters.includes(t))
        )

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <FilterBar activeFilter={activeFilters} onChange={handleFilterChange} />

      <p className="text-gray-600 mb-6">
        {filteredDeals.length} new car deals match filter
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeals.map((deal) => (
          <CarDealCard key={deal.name} {...deal} />
        ))}
      </div>
    </section>
  )
}


