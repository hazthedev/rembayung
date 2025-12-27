import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rembayung - Where Kampung Heritage Meets Modern Kuala Lumpur',
  description: 'Experience authentic Malay cuisine in Kampung Baru, Kuala Lumpur. Khairul Aming\'s RM4 million restaurant venture bringing traditional kampung flavors to the city.',
  keywords: 'Khairul Aming, Rembayung, Malay restaurant, Kampung Baru, Kuala Lumpur, authentic Malaysian food, kampung cuisine',
  openGraph: {
    title: 'Rembayung - Authentic Kampung Cuisine in KL',
    description: 'Experience authentic Malay cuisine in Kampung Baru, Kuala Lumpur. Reservation-only restaurant by Khairul Aming.',
    type: 'website',
    locale: 'en_MY',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rembayung Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rembayung Restaurant',
    description: 'Where Kampung Heritage Meets Modern Kuala Lumpur',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}