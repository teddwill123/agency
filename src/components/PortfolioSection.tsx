import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive online store with advanced filtering and secure checkout.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Corporate Website',
    description: 'A sleek and professional website for a Fortune 500 company.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Mobile App Landing Page',
    description: 'A high-converting landing page for a popular mobile application.',
    image: '/placeholder.svg?height=300&width=400',
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

