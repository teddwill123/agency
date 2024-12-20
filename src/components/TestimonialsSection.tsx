import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Innovators Inc.',
    testimonial: 'WebCraft Agency delivered an outstanding website that perfectly captures our brand essence. Their attention to detail and technical expertise are unmatched.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Jane Smith',
    company: 'Global Solutions Ltd.',
    testimonial: 'Working with WebCraft was a game-changer for our online presence. They created a user-friendly, visually stunning website that has significantly increased our conversions.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Mike Johnson',
    company: 'Innovative Startups Co.',
    testimonial: 'The team at WebCraft Agency went above and beyond our expectations. Their custom e-commerce solution has revolutionized our online sales process.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

