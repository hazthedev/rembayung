'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { CountingNumber } from '@/components/ui/counting-number'
import { motion } from 'framer-motion'
import { Quote, Star, Users, Award, Building, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section with Storytelling Reveal - No scroll animations */}
      <section className="relative h-auto flex items-center justify-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40"
        />
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <Quote className="w-16 h-16 text-white/80 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display text-white mb-6 drop-shadow-lg">
              <span className="inline-block border-b-4 border-white/30 pb-2 hover:border-white/60 transition-all duration-500 hover:scale-105 transform">
                Ten years ago,
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-white/90 mt-4 inline-block leading-relaxed">
                I started cooking on the floor of my apartment,
                <br />
                sharing simple recipes with 800 Instagram followers.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md">
              <span className="inline-block">
                Today, Rembayung stands as my largest dream realized—a RM4 million
                commitment to preserving the flavors of kampung Malaysia.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-center"
          >
            <p className="text-lg text-white/90 italic mb-8">
              — Khairul Amin Kamarulzaman
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-display text-center mb-12">Our Vision</h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <p className="text-xl text-gray-700 text-center leading-relaxed mb-12">
              This isn't just a restaurant. It's a homecoming to the tastes of our childhood,
              served in a space that honors where we've been and celebrates where we're going.
              Welcome to Rembayung. Welcome home.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Authentic Heritage',
                description: 'Preserving traditional kampung recipes passed down through generations, cooked with the same love and care our grandmothers used.'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Community First',
                description: 'Creating 50 meaningful jobs for local Malaysians while building a space where our community can gather and celebrate.'
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Quality Excellence',
                description: 'Investing in the best ingredients, professional equipment, and trained staff to deliver an exceptional dining experience.'
              }
            ].map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={600 + index * 200}
              >
                <Card className="text-center p-6">
                  <CardContent>
                    <div className="text-primary mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* The Investment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-display text-center mb-12">The Investment</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideLeft" delay={400}>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  At RM4 million, Rembayung represents our commitment to quality.
                  We're transparent about this investment because we want you to
                  understand what goes into creating an exceptional dining experience.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Professional Kitchen', value: 'RM 500,000' },
                    { label: 'Building & Architecture', value: 'RM 1,200,000' },
                    { label: 'Staff Training & Salaries', value: 'RM 800,000' },
                    { label: 'Equipment & Furnishings', value: 'RM 600,000' },
                    { label: 'Operations (6 months)', value: 'RM 900,000' }
                  ].map((item, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="fadeInUp"
                      delay={600 + index * 100}
                    >
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-primary font-semibold">{item.value}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
                <ScrollAnimation animation="fadeInUp" delay={1200}>
                  <p className="text-sm text-gray-600 mt-6 italic">
                    *This investment reflects our commitment to quality staff,
                    premium ingredients, and creating a space that honors
                    Malaysian hospitality traditions.
                  </p>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideRight" delay={600}>
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Building className="w-24 h-24 text-primary/30" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-display text-center mb-12">The Space</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl">🏛️</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Architecture</h3>
                  <p className="text-gray-600 mb-4">
                    A semi-glass house design that seamlessly blends modern
                    architectural elements with traditional kampung aesthetics.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 250-seat capacity</li>
                    <li>• Indoor and outdoor dining areas</li>
                    <li>• Private dining room available</li>
                    <li>• Fully air-conditioned comfort</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={600}>
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl">🌿</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Location</h3>
                  <p className="text-gray-600 mb-4">
                    Located in the historic Kampung Baru neighborhood,
                    offering a unique blend of traditional charm and urban convenience.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 9 minutes from KLCC</li>
                    <li>• 5 minutes from Kampung Baru MRT</li>
                    <li>• Authentic neighborhood atmosphere</li>
                    <li>• Easy access from major highways</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-display text-center mb-12">Our Team</h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <p className="text-xl text-gray-700 text-center mb-12">
              We believe in merit-based hiring and have assembled a team of
              50 passionate Malaysians dedicated to preserving our culinary heritage.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { number: 50, label: 'Total Staff' },
              { number: 12, label: 'Kitchen Brigade' },
              { number: 25, label: 'Service Team' },
              { number: 13, label: 'Support Staff' }
            ].map((stat, index) => (
              <ScrollAnimation
                key={index}
                animation="scale"
                delay={600 + index * 150}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountingNumber
                      target={stat.number}
                      duration={2000}
                      delay={index * 200}
                      className="inline-block"
                    />
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeInUp" delay={1200}>
            <div className="bg-cream rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Hiring Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                We're proud to be a "secret employer" - giving opportunities to
                talented Malaysians regardless of their background. Our team
                undergoes rigorous training in traditional cooking techniques
                while learning modern hospitality standards. We invest in our
                people because they are the heart of Rembayung.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* The Food Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-display text-center mb-12">Food Philosophy</h2>
          </ScrollAnimation>
          <div className="space-y-8">
            {[
              {
                title: 'Authentic Recipes',
                description: 'We don\'t innovate on tradition. Our recipes come directly from kampung kitchens, preserved exactly as they should be.',
                icon: '🍲'
              },
              {
                title: 'Quality Ingredients',
                description: 'We source the freshest local ingredients, working directly with Malaysian farmers and producers whenever possible.',
                icon: '🌱'
              },
              {
                title: 'No Compromises',
                description: 'From our homemade sambal to our slow-cooked rendang, we refuse to cut corners. Authentic food takes time.',
                icon: '⏰'
              },
              {
                title: 'Heritage Preservation',
                description: 'Every dish tells a story of Malaysian culinary heritage, connecting diners to the flavors of our childhood.',
                icon: '🏡'
              }
            ].map((philosophy, index) => (
              <ScrollAnimation
                key={index}
                animation="slideLeft"
                delay={400 + index * 200}
              >
                <div className="flex gap-6">
                  <div className="text-5xl flex-shrink-0">{philosophy.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{philosophy.title}</h3>
                    <p className="text-gray-600">{philosophy.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-4xl font-display mb-6">
              Experience the Heart of Kampung Cuisine
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <p className="text-xl mb-8 opacity-90">
              Join us for an authentic journey through Malaysian flavors,
              traditions, and hospitality.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={600}>
            <Button size="lg" variant="secondary">
              <a href="/reservations" className="text-lg">
                Make Your Reservation
              </a>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}