import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          WebCraft
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <Button asChild>
          <Link href="#booking">Book a Consultation</Link>
        </Button>
      </div>
    </header>
  )
}

