import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DealProps {
  title: string
  subtitle: string
  image: string
}

export default function FeaturedDealCard({ title, subtitle, image }: DealProps) {
  return (
    <Card className="hover:shadow-lg transition overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-blue-600 font-semibold mt-1">{subtitle}</p>
        <Button className="mt-4 w-full">View offer</Button>
      </CardContent>
    </Card>
  )
}
