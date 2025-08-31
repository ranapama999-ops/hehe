"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Diensten", href: "#services" },
    { name: "Tarieven", href: "#rates" },
    { name: "Wagenpark", href: "#fleet" },
    { name: "Over Ons", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-green-600">Schipholtaxi</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Contact Info - Desktop Only */}
            <div className="hidden xl:flex items-center space-x-4 mr-2">
              <a href="tel:+31852129427" className="flex items-center text-xs text-gray-600 hover:text-green-600">
                <Phone className="w-3 h-3 mr-1" />
                085-212 9427
              </a>
              <a
                href="https://wa.me/31852129427"
                className="flex items-center text-xs text-gray-600 hover:text-green-600"
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                WhatsApp
              </a>
            </div>

            {/* Book Now Button - Always Visible */}
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-medium">
              Boek Nu
            </Button>

            {/* Mobile/Tablet menu button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-3 pb-4 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Contact & Actions */}
              <div className="pt-3 mt-3 border-t border-gray-100 space-y-3">
                <div className="px-3 space-y-2">
                  <a href="tel:+31852129427" className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    085-212 9427
                  </a>
                  <a href="https://wa.me/31852129427" className="flex items-center text-sm text-gray-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </div>

                {/* Mobile Book Now Button */}
                <div className="px-3">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Boek Nu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
