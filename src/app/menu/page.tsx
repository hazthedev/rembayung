'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Search, Filter, Download } from 'lucide-react'

export default function MenuPage() {
  const menuCategories = [
    {
      id: 'starters',
      name: 'Starters',
      description: 'Begin your journey with our traditional appetizers',
      items: [
        {
          name: 'Kerabu Mangga',
          description: 'Fresh mango salad with fragrant herbs and toasted coconut',
          price: 22,
          dietary: ['V', 'GF'],
          allergens: []
        },
        {
          name: 'Ulam Ulam',
          description: 'Assorted local greens with sambal belacan',
          price: 18,
          dietary: ['V', 'GF'],
          allergens: ['S']
        },
        {
          name: 'Satay Rembayung',
          description: '6 sticks of marinated beef with peanut sauce',
          price: 28,
          dietary: [],
          allergens: ['N']
        }
      ]
    },
    {
      id: 'mains',
      name: 'Main Courses',
      description: 'Our signature kampung specialties',
      items: [
        {
          name: 'Masak Lemak Cili Api Udang',
          description: 'Sweet prawns in creamy coconut curry laced with cili padi. Rich, spicy, and impossible to stop eating',
          price: 38,
          spice: 3,
          dietary: ['GF'],
          allergens: ['SF']
        },
        {
          name: 'Ayam Masak Merah',
          description: "Our grandmother's recipe: chicken braised in a rich, slightly sweet tomato-coconut sauce until it falls off the bone",
          price: 32,
          spice: 1,
          dietary: ['GF'],
          allergens: []
        },
        {
          name: 'Rendang Daging',
          description: 'Slow-cooked beef in rich coconut and spice gravy',
          price: 42,
          spice: 2,
          dietary: ['GF'],
          allergens: ['SF']
        },
        {
          name: 'Ikan Bakar',
          description: 'Grilled sea bass with sambal and lime',
          price: 45,
          spice: 2,
          dietary: ['GF'],
          allergens: ['SF']
        }
      ]
    },
    {
      id: 'sides',
      name: 'Accompaniments',
      description: 'Perfect complements to your meal',
      items: [
        {
          name: 'Nasi Putih',
          description: 'Steamed fragrant white rice',
          price: 5,
          dietary: ['V', 'GF'],
          allergens: []
        },
        {
          name: 'Nasi Kerabu',
          description: 'Herbed rice with fresh vegetables',
          price: 12,
          dietary: ['V', 'GF'],
          allergens: []
        },
        {
          name: 'Sayur Lodeh',
          description: 'Mixed vegetables in coconut milk',
          price: 15,
          dietary: ['V', 'GF'],
          allergens: ['SF']
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      description: 'Sweet endings to your kampung experience',
      items: [
        {
          name: 'Kuih Talam',
          description: 'Two-layer pandan and coconut custard cake',
          price: 12,
          dietary: ['V', 'GF'],
          allergens: ['E']
        },
        {
          name: 'Pisang Goreng',
          description: 'Crispy fried bananas with vanilla ice cream',
          price: 16,
          dietary: ['V'],
          allergens: ['E']
        }
      ]
    },
    {
      id: 'beverages',
      name: 'Beverages',
      description: 'Traditional and modern drinks',
      items: [
        {
          name: 'Teh Tarik',
          description: 'Pulled milk tea, the Malaysian way',
          price: 8,
          dietary: ['V', 'GF'],
          allergens: []
        },
        {
          name: 'Sirap Bandung',
          description: 'Rose syrup milk with basil seeds',
          price: 10,
          dietary: ['V', 'GF'],
          allergens: []
        },
        {
          name: 'Cendol',
          description: 'Coconut milk dessert with palm sugar and jelly',
          price: 12,
          dietary: ['V', 'GF'],
          allergens: []
        }
      ]
    }
  ]

  const getDietaryLabel = (code: string) => {
    const labels: { [key: string]: string } = {
      'V': 'Vegetarian',
      'GF': 'Gluten Free',
      'DF': 'Dairy Free',
      'N': 'Nuts',
      'SF': 'Shellfish',
      'E': 'Eggs',
      'S': 'Soy'
    }
    return labels[code] || code
  }

  const getDietaryColor = (code: string) => {
    const colors: { [key: string]: string } = {
      'V': 'bg-green-100 text-green-800',
      'GF': 'bg-blue-100 text-blue-800',
      'DF': 'bg-yellow-100 text-yellow-800',
      'N': 'bg-red-100 text-red-800',
      'SF': 'bg-red-100 text-red-800',
      'E': 'bg-orange-100 text-orange-800',
      'S': 'bg-purple-100 text-purple-800'
    }
    return colors[code] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            <span className="inline-block border-b-4 border-white/50 pb-2">
              Our Menu
            </span>
          </h1>
          <p className="text-xl opacity-90">
            <span className="inline-block">
              Authentic Kampung Flavors, Elevated
            </span>
          </p>
        </div>
      </div>

      {/* Menu Controls */}
      <div className="z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                <Filter className="w-4 h-4 mr-2" />
                Dietary
              </Button>
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                <Filter className="w-4 h-4 mr-2" />
                Spice Level
              </Button>
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {menuCategories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-16" id={category.id}>
            <ScrollAnimation animation="slideRight" delay={200 + categoryIndex * 200}>
              <div className="mb-8">
                <h2 className="text-3xl font-display mb-2 inline-block border-b-4 border-primary/30 pb-2 hover:border-primary/60 transition-colors duration-500">
                  {category.name}
                </h2>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <ScrollAnimation
                  key={index}
                  animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                  delay={400 + categoryIndex * 300 + index * 100}
                >
                  <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-2xl font-bold text-primary ml-4">
                        RM {item.price}
                      </div>
                    </div>

                    {/* Dietary Tags & Spice Level */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.dietary && item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getDietaryColor(diet)} hover:scale-110 transition-transform`}
                        >
                          {getDietaryLabel(diet)}
                        </span>
                      ))}
                      {item.allergens && item.allergens.map((allergen) => (
                        <span
                          key={allergen}
                          className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 hover:scale-110 transition-transform"
                        >
                          Contains: {getDietaryLabel(allergen)}
                        </span>
                      ))}
                      {'spice' in item && item.spice && (
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-600 mr-1">Spice:</span>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < (item as any).spice ? 'bg-red-500' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        ))}

        {/* Legend */}
        <ScrollAnimation animation="scale" delay={1200}>
          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold mb-4 text-lg">Dietary Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Vegetarian</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Gluten Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Dairy Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Contains Allergens</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation animation="fadeInUp" delay={1400}>
          <div className="text-center py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 hover:from-primary/10 hover:to-secondary/10 transition-all duration-500">
            <h3 className="text-2xl font-display mb-4">
              <span className="inline-block">
                Ready to experience authentic kampung flavors?
              </span>
            </h3>
            <p className="text-gray-600 mb-8">
              Make your reservation for an unforgettable dining experience
            </p>
            <Button size="lg">
              <a href="/reservations">Make a Reservation</a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}