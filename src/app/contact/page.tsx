'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Train,
  Car
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    // TODO: Implement actual form submission to backend/API
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            <span className="inline-block border-b-4 border-white/50 pb-2">
              Contact Us
            </span>
          </h1>
          <p className="text-xl opacity-90">
            <span className="inline-block">
              Get in touch or visit us in the heart of Kampung Baru
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <ScrollAnimation animation="slideRight" delay={400}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold mb-2">Rembayung Restaurant</p>
                  <p className="text-gray-600">
                    Lot 2791, Jalan Daud
                    <br />
                    Off Jalan Raja Muda Abdul Aziz
                    <br />
                    Kampung Baru
                    <br />
                    50300 Kuala Lumpur
                    <br />
                    Malaysia
                  </p>
                </div>
                <Button className="w-full">
                  <a
                    href="https://maps.google.com/?q=Rembayung+Restaurant+Kampung+Baru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
            </ScrollAnimation>

            {/* Contact Details */}
            <ScrollAnimation animation="slideRight" delay={600}>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+60 3-1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">reservations@rembayung.com</p>
                    <p className="text-gray-600">hello@rembayung.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">+60 12-3456 7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>

            {/* Operating Hours */}
            <ScrollAnimation animation="slideRight" delay={800}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Tuesday - Thursday</span>
                    <span>12:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Friday - Saturday</span>
                    <span>12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span>12:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span className="font-semibold">Monday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Last seating: 1 hour before closing time
                </p>
              </CardContent>
            </Card>
            </ScrollAnimation>

            {/* Transportation */}
            <ScrollAnimation animation="slideRight" delay={1000}>
              <Card>
                <CardHeader>
                  <CardTitle>Getting Here</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Public Transport</p>
                      <p className="text-sm text-gray-600">
                        <strong>MRT:</strong> Kampung Baru Station (5-minute walk)
                        <br />
                        <strong>LRT:</strong> PWTC Station (10-minute walk)
                        <br />
                        <strong>Bus:</strong> Routes 101, 102, 115 stop nearby
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Driving & Parking</p>
                      <p className="text-sm text-gray-600">
                        Limited street parking available.
                        <br />
                        We recommend carpooling or using public transport.
                        <br />
                        Nearest paid parking: KLCC (9-minute walk)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <ScrollAnimation animation="slideLeft" delay={400}>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <ScrollAnimation animation="fadeInUp" delay={500}>
                    <div>
                      <label className="block text-sm font-medium mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={600}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={700}>
                    <div>
                      <label className="block text-sm font-medium mb-1">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="private-dining">Private Dining / Events</option>
                        <option value="feedback">Feedback</option>
                        <option value="press">Media / Press</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={800}>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={900}>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </ScrollAnimation>
                </form>
              </CardContent>
            </Card>
            </ScrollAnimation>

            {/* Map Placeholder */}
            <ScrollAnimation animation="slideLeft" delay={600}>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Will be integrated with Google Maps API
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>

        {/* FAQ Section */}
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <div className="mt-16">
            <h2 className="text-3xl font-display text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'Do I need a reservation?',
                  a: 'Yes, Rembayung operates on a reservation-only basis to ensure the best dining experience for all our guests.'
                },
                {
                  q: 'Is there parking available?',
                  a: 'Street parking is limited in Kampung Baru. We recommend using public transport (MRT/LRT) or ride-sharing services.'
                },
                {
                  q: 'Do you accommodate dietary restrictions?',
                  a: 'Yes, we can accommodate various dietary requirements. Please let us know when making your reservation.'
                },
                {
                  q: 'Can I host private events?',
                  a: 'Yes, we offer private dining options for groups of 8 or more. Please contact us for more information.'
                },
                {
                  q: 'What is the dress code?',
                  a: 'Smart casual. We want our guests to feel comfortable while maintaining an elegant atmosphere.'
                },
                {
                  q: 'Do you have a bar or serve alcohol?',
                  a: 'We do not serve alcohol. We offer a curated selection of non-alcoholic beverages, traditional Malaysian drinks, and premium mocktails.'
                }
              ].map((faq, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale"
                  delay={300 + index * 100}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-gray-600 text-sm">{faq.a}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}