'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { Calendar, Clock, Users, Check, AlertCircle } from 'lucide-react'

export default function ReservationsPage() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [partySize, setPartySize] = useState(2)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    occasion: '',
    agreeTerms: false
  })

  // Sample available times
  const availableTimes = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ]

  // Get dates for the next 60 days
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 60; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        available: Math.random() > 0.3 // Simulate availability
      })
    }
    return dates
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual reservation submission to backend/API
    setStep(4)
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-cream py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollAnimation animation="scale" delay={300}>
            <Card className="text-center p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-display mb-4">Reservation Confirmed!</h1>
              <ScrollAnimation animation="fadeInUp" delay={500}>
                <p className="text-gray-600 mb-8">
                  Thank you for your reservation. We've sent a confirmation email to {formData.email}.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={700}>
                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                  <h2 className="font-semibold mb-4">Reservation Details</h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <p className="font-semibold">{selectedDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <p className="font-semibold">{selectedTime}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Party Size:</span>
                      <p className="font-semibold">{partySize} guests</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <p className="font-semibold">{formData.firstName} {formData.lastName}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={900}>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline">
                    <a href="/" className="flex items-center gap-2">
                      Back to Home
                    </a>
                  </Button>
                  <Button>
                    Add to Calendar
                  </Button>
                </div>
              </ScrollAnimation>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((stepNumber) => (
                <ScrollAnimation
                  key={stepNumber}
                  animation="scale"
                  delay={300 + stepNumber * 100}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= stepNumber ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {stepNumber}
                    </div>
                    {stepNumber < 3 && (
                      <div className={`w-full h-1 mx-2 ${
                        step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <ScrollAnimation animation="fadeInUp" delay={600}>
                <span className={step >= 1 ? 'text-primary font-semibold' : 'text-gray-600'}>
                  Date & Time
                </span>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={700}>
                <span className={step >= 2 ? 'text-primary font-semibold' : 'text-gray-600'}>
                  Party Details
                </span>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={800}>
                <span className={step >= 3 ? 'text-primary font-semibold' : 'text-gray-600'}>
                  Confirmation
                </span>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        {/* Step 1: Date & Time Selection */}
        {step === 1 && (
          <ScrollAnimation animation="slideLeft" delay={400}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
            <CardContent className="space-y-6">
              {/* Party Size */}
              <ScrollAnimation animation="fadeInUp" delay={500}>
                <div>
                  <label className="block text-sm font-medium mb-2">Party Size</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((size, index) => (
                      <ScrollAnimation
                        key={size}
                        animation="scale"
                        delay={600 + index * 50}
                      >
                        <button
                          onClick={() => setPartySize(size)}
                          className={`w-12 h-12 rounded-lg font-semibold transition-colors ${
                            partySize === size
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          {size}
                        </button>
                      </ScrollAnimation>
                    ))}
                    <button className="px-4 h-12 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200">
                      9+
                    </button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Date Selection */}
              <ScrollAnimation animation="fadeInUp" delay={800}>
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <div className="grid grid-cols-7 gap-2 overflow-x-auto pb-2">
                    {getAvailableDates().slice(0, 35).map((day, index) => (
                      <ScrollAnimation
                        key={day.date}
                        animation="scale"
                        delay={900 + index * 20}
                      >
                        <button
                          onClick={() => day.available && setSelectedDate(day.date)}
                          disabled={!day.available}
                          className={`p-2 rounded-lg border text-center min-w-[60px] ${
                            !day.available
                              ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                              : selectedDate === day.date
                              ? 'border-primary bg-primary text-white'
                              : 'bg-white border-gray-200 hover:border-primary'
                          }`}
                        >
                          <div className="text-xs text-gray-500">{day.day}</div>
                          <div className="font-semibold">{day.dateNum}</div>
                          <div className="text-xs text-gray-500">{day.month}</div>
                        </button>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Time Selection */}
              <ScrollAnimation animation="fadeInUp" delay={1100}>
                <div>
                  <label className="block text-sm font-medium mb-2">Select Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {availableTimes.map((time, index) => (
                      <ScrollAnimation
                        key={time}
                        animation="scale"
                        delay={1200 + index * 30}
                      >
                        <button
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-4 rounded-lg border transition-colors ${
                            selectedTime === time
                              ? 'border-primary bg-primary text-white'
                              : 'bg-white border-gray-200 hover:border-primary'
                          }`}
                        >
                          {time}
                        </button>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={1400}>
                <div className="flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedTime}
                    size="lg"
                  >
                    Continue
                  </Button>
                </div>
              </ScrollAnimation>
            </CardContent>
          </Card>
          </ScrollAnimation>
        )}

        {/* Step 2: Guest Information */}
        {step === 2 && (
          <ScrollAnimation animation="slideRight" delay={400}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Guest Information
                </CardTitle>
              </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <ScrollAnimation animation="fadeInUp" delay={500}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={600}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={700}>
                  <div>
                    <label className="block text-sm font-medium mb-1">Occasion (Optional)</label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select an occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={800}>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Special Requests / Dietary Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Please let us know about any allergies or special requirements..."
                    />
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="scale" delay={900}>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold mb-1">No-Show Policy</p>
                        <p className="text-gray-600">
                          We require credit card details to hold your reservation.
                          Your card will only be charged if you don't show up for your reservation.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeInUp" delay={1000}>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                      className="flex-1"
                    >
                      Continue to Confirmation
                    </Button>
                  </div>
                </ScrollAnimation>
              </form>
            </CardContent>
          </Card>
          </ScrollAnimation>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <ScrollAnimation animation="slideLeft" delay={400}>
            <Card>
              <CardHeader>
                <CardTitle>Review & Confirm Your Reservation</CardTitle>
              </CardHeader>
            <CardContent className="space-y-6">
              {/* Reservation Summary */}
              <ScrollAnimation animation="fadeInUp" delay={500}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Reservation Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <p className="font-semibold">{selectedDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <p className="font-semibold">{selectedTime}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Party Size:</span>
                      <p className="font-semibold">{partySize} guests</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Occasion:</span>
                      <p className="font-semibold">{formData.occasion || 'None specified'}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Guest Details */}
              <ScrollAnimation animation="fadeInUp" delay={600}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Guest Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <p className="font-semibold">{formData.firstName} {formData.lastName}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <p className="font-semibold">{formData.email}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <p className="font-semibold">{formData.phone}</p>
                    </div>
                    {formData.specialRequests && (
                      <div className="col-span-2">
                        <span className="text-gray-600">Special Requests:</span>
                        <p className="font-semibold">{formData.specialRequests}</p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Terms */}
              <ScrollAnimation animation="fadeInUp" delay={700}>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    By confirming this reservation, you agree to our no-show policy
                    and terms of service.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={800}>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                  >
                    Edit Details
                  </Button>
                  <Button
                    onClick={handleFormSubmit}
                    size="lg"
                    className="flex-1"
                  >
                    Confirm Reservation
                  </Button>
                </div>
              </ScrollAnimation>
            </CardContent>
          </Card>
          </ScrollAnimation>
        )}
      </div>
    </div>
  )
}