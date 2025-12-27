'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronRight } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300"
        style={{
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-display text-primary hover:scale-105 transition-transform duration-200"
              >
                Rembayung
              </Link>
            </div>

            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${0.1 + index * 0.05}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors font-medium relative group"
                  >
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>
              ))}
              <Button asChild>
                <Link href="/reservations">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className="md:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        style={{
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-display text-primary hover:scale-105 transition-transform duration-200"
              >
                Rembayung
              </Link>
            </div>

            <div className="hover:scale-110 transition-transform duration-200">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 rotate-90 transition-transform duration-200" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-3">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="opacity-0 transition-all duration-300"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: isMenuOpen ? `${index * 0.05}s` : '0s'
                  }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      {item.name}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              ))}
              <div
                className="px-4 pt-2 opacity-0 transition-all duration-300"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transitionDelay: '0.3s'
                }}
              >
                <Button asChild className="w-full">
                  <Link href="/reservations" onClick={() => setIsMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar