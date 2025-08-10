"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface BannerProps {
  title: string
  msg: string
  imgsrc: string
  imagealt?: string
  cta: string
  onCtaClick?: string
}

export default function Banner({
  title,
  msg,
  imgsrc,
  imagealt = "",
  cta,
  onCtaClick,
}: BannerProps) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2">
        <Image
          src={imgsrc}
          alt={imagealt}
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{msg}</p>
        <Button onClick={()=>{alert(onCtaClick)}}>{cta}</Button>
      </div>
    </div>
  )
}
