import HeroSection from '@/app/components/Front/Home/HeroSection'
import Testimonials from '@/app/components/Front/Home/Testimonials'
import VehiclesClient from '@/app/components/Front/allcars/VehiclesClient'
import Banner from '@/app/components/Front/newcars/Banner'
import CarDealList from '@/app/components/Front/newcars/CarDealList'
import FeaturedDealsSection from '@/app/components/Front/newcars/FeaturedDealsSection'
import HeroTabs from '@/app/components/Front/newcars/HeroTabs'
import React from 'react'
import type { Car } from "../../vehicles/types"
import SellMyCarHero from '@/app/components/Front/usedcars/Entervin'
import HowItWorks from '@/app/components/Front/usedcars/HowItWorks'
import ValueProps from '@/app/components/Front/usedcars/ValueProps'
import FAQ from '@/app/components/Front/usedcars/FAQ'
import Blog from '@/app/components/Front/blog/Blog'
import SampleEditor from '@/app/components/Front/blog/SampleEditor'



interface PageProps {
  params: {
    slug: string
  }
}
const cars: Car[] = [
  { id: 1, name: "Tesla Model 3", type: ["Electric", "Saloon"], price: 39990 },
  { id: 2, name: "Renault Clio", type: ["Small", "Hatchback"], price: 16646 },
  { id: 3, name: "BMW X5", type: ["SUV"], price: 55999 },
  { id: 4, name: "Audi A3", type: ["Saloon"], price: 30000 },
  // add your cars here...
]

function page( { params }: PageProps) {
  if (params.slug === "new") {
    return newcar()
  } else if (params.slug === "sell") {
    return SellMyCarPage()
  }else if(params.slug==="news"){
    return blog()
  }
   else {
    return othercar(params.slug)
  }
}

export default page


const newcar=()=>{
return <div>
<HeroSection/>
<HeroTabs />
<FeaturedDealsSection />
<Banner
title={'SELL YOUR CAR FOR WHAT ITS REALLY WORTH'}
msg="Offers on tap."
imgsrc=""
imagealt="Audi Q4 e-tron"
cta="sell"
/>
<p className="mx-auto w-[60%] h-[10em] max-sm:mt-[2em] max-sm:mb-[2em] flex items-center justify-center text-center text-gray-600 text-xl">
For all deals, please contact the dealer for a personalised quote, including
terms and conditions. Quote is subject to dealer requirements, including
status and availability. All prices include VAT.
</p>
<Banner
title="Drive your dream car"
msg="Save thousands with our exclusive deals compiar and make your choice."
imgsrc=""
imagealt="Audi Q4 e-tron"
cta="compair"
/>
<Testimonials/>
<CarDealList />
</div>
}

const othercar=(type:string)=>{
  return <div>
  <HeroSection/>
  <VehiclesClient cars={cars} />
  </div>
  }

 const SellMyCarPage = ()=> {
    return (
      <>
        <SellMyCarHero />
        <HowItWorks />
        <ValueProps />
        <Testimonials />
        <FAQ />
      </>
    )
  }

const blog=()=>{
  return<>
  <Blog/>
  </>
}