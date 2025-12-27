import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-display text-white mb-4">Rembayung</h3>
            <p className="mb-4">
              Where Kampung Heritage Meets Modern Kuala Lumpur
            </p>
            <p className="text-sm mb-4">
              Khairul Aming's RM4 million commitment to preserving authentic
              Malay cuisine while creating meaningful employment opportunities for local Malaysians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="font-semibold">Address</div>
                Lot 2791, Jalan Daud
                <br />
                Kampung Baru, 50300 KL
              </li>
              <li className="mt-3">
                <div className="font-semibold">Phone</div>
                +60 3-1234 5678
              </li>
              <li>
                <div className="font-semibold">Email</div>
                reservations@rembayung.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © 2024 Rembayung. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com/rembayung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/rembayung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/rembayung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer