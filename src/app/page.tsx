"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedElement, FloatingElement } from '@/components/ui/animated-element'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import {
  MapPin,
  Clock,
  Phone,
  Star,
  ChevronRight,
  Users,
  Award,
  Heart
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-secondary/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />

        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h1 className="text-5xl md:text-7xl font-display text-white mb-6 drop-shadow-lg">
              Where Kampung Heritage
              <br />
              Meets Modern KL
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto">
              <p>
                Experience authentic Malay cuisine in Kampung Baru, Kuala Lumpur.
                Khairul Aming's passion brought to life.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg shadow-2xl hover:scale-105 transition-transform">
                <Link href="/reservations" className="flex items-center gap-2">
                  Make a Reservation
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="primary-outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideLeft" delay={200}>
              <div>
                <h2 className="text-4xl font-display mb-6">
                  Welcome to Rembayung
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  From humble beginnings sharing recipes on Instagram to a RM4 million
                  restaurant venture, Rembayung represents Khairul Aming's commitment to
                  preserving authentic kampung flavors while creating memorable dining experiences.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Located in the heart of Kampung Baru, our semi-glass house design combines
                  traditional Malaysian warmth with modern sophistication, accommodating up to
                  250 guests in an elevated kampung atmosphere.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <ScrollAnimation animation="fadeInUp" delay={400}>
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-2xl">250</div>
                        <div className="text-gray-600">Seat Capacity</div>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInUp" delay={500}>
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                      <Award className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-2xl">50</div>
                        <div className="text-gray-600">Local Employees</div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation animation="slideLeft" delay={600}>
                  <Button variant="outline" className="group">
                    <Link href="/about" className="flex items-center gap-2">
                      Read Our Full Story
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideRight" delay={300}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src="/images/rembayung.avif"
                alt="Rembayung Restaurant Interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display mb-4">Signature Dishes</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Authentic kampung recipes passed down through generations,
                elevated with the finest ingredients and modern techniques.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Masak Lemak Cili Api Udang',
                description: 'Sweet prawns in creamy coconut curry with cili padi',
                price: 38,
                spice: 3
              },
              {
                name: 'Ayam Masak Merah',
                description: 'Chicken braised in rich tomato-coconut sauce',
                price: 32,
                spice: 1
              },
              {
                name: 'Nasi Lemak Rembayung',
                description: 'Our signature version with premium sambal',
                price: 28,
                spice: 2
              }
            ].map((dish, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={200 + index * 100}
              >
                <Card
                  className={`overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0`}
                >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🍽️</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{dish.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < dish.spice ? 'bg-red-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      RM {dish.price}
                    </span>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      View Details
                    </Button>
                  </div>
                </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="text-center mt-12">
              <Button variant="primary-outline" size="lg" className="group">
                <Link href="/menu" className="flex items-center gap-2">
                  View Full Menu
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-forest/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideLeft" delay={200}>
              <div>
                <h2 className="text-4xl font-display mb-6">Visit Us</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Located in the historic Kampung Baru, just 9 minutes from KLCC.
                  Experience authentic kampung atmosphere in the heart of Kuala Lumpur.
                </p>

                <div className="space-y-4 mb-8">
                  <ScrollAnimation animation="slideLeft" delay={300}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Address</div>
                        <div className="text-gray-600">
                          Lot 2791, Jalan Daud, Off Jalan Raja Muda Abdul Aziz,
                          Kampung Baru, 50300 Kuala Lumpur
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slideLeft" delay={400}>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Operating Hours</div>
                        <div className="text-gray-600">
                          Tuesday - Sunday: 12:00 PM - 10:00 PM
                        </div>
                        <div className="text-gray-600">
                          Closed on Mondays
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slideLeft" delay={500}>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Reservations</div>
                        <div className="text-gray-600">
                          +60 3-1234 5678
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                <ScrollAnimation animation="slideLeft" delay={600}>
                  <Button className="shadow-lg hover:shadow-xl transition-shadow">
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Directions
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={300}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl group">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="animate-float">
                  <MapPin className="w-16 h-16 text-primary/50" />
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-display mb-6">
              Ready for an Authentic Kampung Experience?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={300}>
            <div className="text-xl mb-8 opacity-90">
              <p>
                Join us for an unforgettable culinary journey.
                Limited tables available - reserve yours today.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <Button size="lg" variant="secondary" className="text-lg shadow-2xl hover:scale-105 transition-transform">
              <Link href="/reservations">
                Make Your Reservation Now
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

    </div>
  )
}