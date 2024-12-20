import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Smartphone, ShoppingCart, Megaphone } from 'lucide-react'

const services = [
  {
    title: 'Custom Web Development',
    description: 'Tailored websites built from the ground up to meet your specific needs and goals.',
    icon: Globe,
  },
  {
    title: 'Responsive Design',
    description: 'Ensure your website looks great and functions flawlessly on all devices and screen sizes.',
    icon: Smartphone,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with secure payment gateways and inventory management systems.',
    icon: ShoppingCart,
  },
  {
    title: 'Digital Marketing Integration',
    description: 'Seamlessly integrate marketing tools and analytics to drive growth and measure success.',
    icon: Megaphone,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

