import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          Custom website development tailored to your business needs
        </p>
        <Button asChild size="lg" className="animate-fade-in-up animation-delay-400">
          <Link href="#booking">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}

