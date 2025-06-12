// src/components/FooterNav.jsx
import React from 'react'
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react'

export default function FooterNav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-teal-200">
      <div className="container max-w-6xl mx-auto">
        {/* Brand + Back-to-Top */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-amber-400">
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-amber-600">
            Anduru
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-700 hover:bg-amber-400 transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="text-sm">Back to top</span>
          </button>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-100">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Experience', href: '/experience' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-200"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-100">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/iamanduru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-teal-300 hover:text-amber-400 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3 opacity-50" />
              </a>
              <a
                href="mailto:contact@anduru.dev"
                className="flex items-center gap-3 text-teal-300 hover:text-amber-400 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>andurumitchelleanyango@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-100">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to receive updates about new projects and articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
              <button className="bg-teal-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-6 border-t border-teal-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Anduru. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="/privacy"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
