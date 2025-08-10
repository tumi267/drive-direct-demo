import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface CarDealCardProps {
  name: string
  tagline: string
  rating: string
  reviewLink: string
  price: string
  leasePrice: string
  image: string
}

export default function CarDealCard({
  name,
  tagline,
  rating,
  reviewLink,
  price,
  leasePrice,
  image,
}: CarDealCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image src={image} alt={name} width={400} height={250} className="w-full object-cover" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p className="text-sm text-gray-500">{tagline}</p>
      </CardHeader>
      <CardContent>
        <p className="font-bold">{price}</p>
        <p className="text-sm text-gray-600">{leasePrice}</p>
        <a
          href={reviewLink}
          className="text-blue-600 underline text-sm mt-2 block"
        >
          {name} review ({rating}/10)
        </a>
      </CardContent>
    </Card>
  )
}
