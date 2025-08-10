"use client"

import { Button } from "@/components/ui/button"

interface FilterBarProps {
  activeFilter: string[] // multiple filters
  onChange: (filter: string) => void
}

const filters = [
  "All",
  "SUVs",
  "Hybrid & electric cars",
  "Small cars",
  "Saloons",
  "Family cars",
  "Hatchbacks",
  "Hot hatches",
  "City cars",
  "People carriers",
  "7 seaters",
  "Estate cars",
  "Sports cars",
  "Coupes",
  "Electric vans",
]

export default function FilterBar({ activeFilter, onChange }: FilterBarProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-2">See all new car deals</h2>
      <p className="text-gray-600 mb-4">Filter by car type:</p>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter.includes(filter)
          return (
            <Button
              key={filter}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onChange(filter)}
            >
              {filter}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
