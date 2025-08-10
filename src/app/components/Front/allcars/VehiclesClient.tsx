"use client"

import { useState } from "react"
import VehicleFilter from "./VehicleFilter"
import CarList from "./CarList"
import type { Filters, Car } from "../../../vehicles/types"

type VehiclesClientProps = {
  cars: Car[]
}

export default function VehiclesClient({ cars }: VehiclesClientProps) {
  const [filters, setFilters] = useState<Filters>({
    vehicleType: "Cars",
    postcode: "",
    distance: "Nationwide",
    paymentType: "Cash",
    minPrice: "",
    maxPrice: "",
    minYear: "2013",
    maxYear: "2025",
    make: "",
    selectedMakes: [],
  })

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters)
  }

  const filteredCars = cars.filter((car) => {
    // Normalize car.type to array
    const carTypes = Array.isArray(car.type) ? car.type : [car.type]
  
    // Map 'Cars' filter to types that belong to cars
    const carsGroupTypes = [
      "Electric",
      "Saloon",
      "Small",
      "Hatchback",
      "SUV",
      "Saloon",
      // add more car-related types here
    ]
  
    if (filters.vehicleType === "Cars") {
      // Pass if car has any car-related type
      if (!carTypes.some((t) => carsGroupTypes.includes(t))) return false
    } else if (filters.vehicleType === "Vans") {
      // Similarly handle vans if needed, e.g.:
      const vansGroupTypes = ["Panel Van", "Crew Van", "Pick-up"]
      if (!carTypes.some((t) => vansGroupTypes.includes(t))) return false
    } else if (filters.vehicleType !== "All") {
      // If vehicleType is something else, just do normal check
      if (!carTypes.includes(filters.vehicleType)) return false
    }
  
    // Selected makes filter
    if (filters.selectedMakes.length > 0) {
      if (!filters.selectedMakes.includes(car.name.split(" ")[0])) return false
    }
  
    // Price filters
    if (filters.minPrice && car.price < Number(filters.minPrice)) return false
    if (filters.maxPrice && car.price > Number(filters.maxPrice)) return false
  
    return true
  })
   console.log(filteredCars)

  return (
    <div className="flex gap-8 max-w-7xl mx-auto p-4 max-sm:p-0 max-sm:gap-2 max-sm:max-w-[100vw]">
      <VehicleFilter onChange={handleFiltersChange} />
      <CarList cars={filteredCars} />
    </div>
  )
}
