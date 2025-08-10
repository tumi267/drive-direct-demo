"use client"

import React from "react"
import type { Car } from "../../../vehicles/types"

type CarListProps = {
  cars: Car[]
}

export default function CarList({ cars }: CarListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-4 max-w-7xl mx-auto">
      {cars.length === 0 && <p>No cars found matching filters.</p>}
      {cars.map((car) => (
        <div key={car.id} className="border w-[20em] h-[20em] rounded p-4 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold">{car.name}</h3>
          <p className="text-sm text-gray-600">
            Type: {Array.isArray(car.type) ? car.type.join(", ") : car.type}
          </p>
          <p className="text-blue-600 font-semibold">£{car.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

