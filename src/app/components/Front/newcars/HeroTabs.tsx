"use client"
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import { useState } from "react"

const tabs = [
  { label: "Best new car deals", value: "new-car-deals" },
  { label: "Top EV deals", value: "ev-deals" },
  { label: "0% finance deals", value: "finance-deals" },
  { label: "Immediate delivery", value: "immediate-delivery" },
]

export default function HeroTabs() {
  const [active, setActive] = useState(tabs[0].value)

  return (
    <div className="bg-[#171717] text-white py-4 mt-[2em] mb-[2em]">
      <div className="container mx-auto">
        <Tabs
          value={active}
          onValueChange={setActive}
          className="w-full flex justify-center"
        >
          <TabsList className="bg-transparent space-x-6 border-b border-gray-700">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`px-3 pb-2 text-base font-semibold data-[state=active]:border-b-2 data-[state=active]:border-blue-500`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

