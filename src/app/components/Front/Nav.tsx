"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; 
import { Menu, Bell } from "lucide-react";
import { useState } from "react";

export default function StoreFrontNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className=" md:block bg-[#252525] shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        {/* Desktop navigation */}
        <nav className=" md:flex items-center gap-6">
          {["New","Used","Buy", "Sell", "Deals", "Vans","News"].map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`} className="text-white hover:text-600">
              {link}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Button variant="ghost" className="text-white hover:text-600"><Bell className="h-5 w-5" /></Button> */}
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>

        {/* Mobile menu toggle */}
        {/* <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileNavOpen((open) => !open)}>
          <Menu className="h-5 w-5" />
        </Button> */}
      </div>

      {/* Mobile navigation */}
      {/* {isMobileNavOpen && (
        <nav className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {["Buy", "Sell", "Lease Deals", "Reviews"].map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`} className="block hover:text-blue-600">
              {link}
            </Link>
          ))}
          <Button variant="ghost" className="w-full">Log in</Button>
          <Button className="w-full">Sign up</Button>
        </nav>
      )} */}
    </header>
  );
}
