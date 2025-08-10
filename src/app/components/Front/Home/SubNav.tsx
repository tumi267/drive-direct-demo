"use client"
import { Button } from "../../../../components/ui/button"
import React, { useState } from "react"

const tabs = [
  { label: "Find a car", href: "/find-a-car" },
  { label: "Sell my car", href: "/sell-my-car" },
  { label: "Read reviews", href: "/read-reviews" },
]

export default function SubNav() {
  const [activeTab, setActiveTab] = useState(tabs[0].label)

  return (
    <div className="bg-[#171717] px-4 py-3  h-[40vh] max-sm:w-[90%]">
    <div className="md:flex items-center gap-x-[10em] max-sm:justify-center ">
    <h1 className="text-white font-semibold text-[48px] max-sm:text-[32px] max-sm:text-center">drive direct</h1>
      <nav
        className="flex justify-center"
        role="tablist"
        aria-label="Hero navigation tabs"
      >
        <ul className="flex space-x-8 list-none p-0 m-0 max-sm:space-x-0 " role="presentation">
          {tabs.map(({ label, href }) => {
            const isActive = activeTab === label
            return (
              <li key={label} role="presentation">
                <button
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(label)}
                  className={`tab__link px-4 py-2 font-semibold text-l max-sm:text-m 
                    ${
                      isActive
                        ? "text-white hover:border-b-2"
                        : "text-gray-300 hover:text-white hover:border-b-2 "
                    }
                    focus:outline-none
                  `}
                  data-interaction-element={label}
                  data-interaction-section="Hero with tabs"
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
      </div>
      <div className="flex items-center justify-center mt-[1em] boroder-t-1 border-white-200">
            <div>
                <input type="text" className="w-[60vw] rounded-3xl bg-white h-[2em]" />
                <div className="flex items-center justify-center mt-[2.5em] gap-[0.5em]">
                    <p className="text-white">or let us help you</p>
                    <Button variant="outline" className="font-semibold bg-[#171717] text-white "> Find a Card</Button>
                </div>
            </div>
      </div>

    </div>
  )
}
