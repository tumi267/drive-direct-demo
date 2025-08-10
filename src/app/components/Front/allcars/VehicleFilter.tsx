"use client"

import { useState } from "react"
import type { Filters } from "../../../vehicles/types"

const vehicleTypes = ["Cars", "Vans"]
const paymentTypes = ["Cash", "Monthly lease"]
const popularMakes = ["Audi", "BMW", "Hyundai", "Kia", "Volvo"]
const distances = ["Nationwide", "10 miles", "25 miles", "50 miles", "100 miles"]
const years = Array.from({ length: 13 }, (_, i) => (2013 + i).toString())

type VehicleFilterProps = {
  onChange: (filters: Filters) => void
}

export default function VehicleFilter({ onChange }: VehicleFilterProps) {
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

  function handleInputChange<K extends keyof Filters>(field: K, value: Filters[K]) {
    const newFilters = { ...filters, [field]: value }
    setFilters(newFilters)
    onChange(newFilters)
  }

  function toggleMake(make: string) {
    let selected = [...filters.selectedMakes]
    if (selected.includes(make)) {
      selected = selected.filter((m) => m !== make)
    } else {
      selected.push(make)
    }
    handleInputChange("selectedMakes", selected)
  }

  return (
    <div className="bg-white shadow p-6 space-y-6  mt-[1em] ml-[0.5em]">
      {/* Vehicle Type */}
      <div>
        <label className="font-semibold mb-2 block">Vehicle Type</label>
        <select
          value={filters.vehicleType}
          onChange={(e) => handleInputChange("vehicleType", e.target.value)}
          className="border rounded p-2 w-full"
        >
          {vehicleTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Postcode & Distance */}
      <div className="grid  gap-4">
        <div>
          <label className="font-semibold mb-2 block">Postcode</label>
          <input
            type="text"
            placeholder="Enter postcode"
            value={filters.postcode}
            onChange={(e) => handleInputChange("postcode", e.target.value)}
            className="border rounded p-2 w-full"
          />
          <p className="text-sm text-gray-500 mt-1">
            Please add your postcode so we can show nearest vehicles.
          </p>
        </div>
        <div>
          <label className="font-semibold mb-2 block">Distance from</label>
          <select
            value={filters.distance}
            onChange={(e) => handleInputChange("distance", e.target.value)}
            className="border rounded p-2 w-full"
          >
            {distances.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Payment Type */}
      <div>
        <label className="font-semibold mb-2 block">Payment Type</label>
        <div className="flex gap-4">
          {paymentTypes.map((pay) => (
            <label key={pay} className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="paymentType"
                value={pay}
                checked={filters.paymentType === pay}
                onChange={() => handleInputChange("paymentType", pay)}
                className="form-radio"
              />
              <span>{pay}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="grid  gap-4">
        <div>
          <label className="font-semibold mb-2 block">Min Price</label>
          <input
            type="number"
            placeholder="Any"
            value={filters.minPrice}
            onChange={(e) => handleInputChange("minPrice", e.target.value)}
            className="border rounded p-2 w-full"
            min={0}
          />
        </div>
        <div>
          <label className="font-semibold mb-2 block">Max Price</label>
          <input
            type="number"
            placeholder="Any"
            value={filters.maxPrice}
            onChange={(e) => handleInputChange("maxPrice", e.target.value)}
            className="border rounded p-2 w-full"
            min={0}
          />
        </div>
      </div>

      {/* Age Range */}
      <div className="grid gap-4">
        <div>
          <label className="font-semibold mb-2 block">From (Year)</label>
          <select
            value={filters.minYear}
            onChange={(e) => handleInputChange("minYear", e.target.value)}
            className="border rounded p-2 w-full"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-semibold mb-2 block">To (Year)</label>
          <select
            value={filters.maxYear}
            onChange={(e) => handleInputChange("maxYear", e.target.value)}
            className="border rounded p-2 w-full"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Popular Makes */}
      <div>
        <label className="font-semibold mb-2 block">Popular Makes</label>
        <div className="flex flex-wrap gap-2">
          {popularMakes.map((make) => {
            const isSelected = filters.selectedMakes.includes(make)
            return (
              <button
                key={make}
                onClick={() => toggleMake(make)}
                className={`px-3 py-1 rounded-full text-sm font-medium border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {make}
              </button>
            )
          })}
        </div>
      </div>

      {/* Reset Button */}
      <div>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={() => {
            const reset: Filters = {
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
            }
            setFilters(reset)
            onChange(reset)
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
}

