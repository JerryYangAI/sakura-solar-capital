'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import SearchModal from './SearchModal'

const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '电站投资', href: '/projects' },
  { name: '投资流程', href: '/process' },
  { name: '常见问答', href: '/faq' },
  { name: '联系我们', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <header className="bg-white shadow-professional border-b border-gray-100 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/logo-small.svg"
                alt="Sakura太阳能源投资"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-dark hover:text-primary-blue transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-secondary-dark hover:text-primary-blue transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              立即咨询
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-secondary-dark hover:text-primary-blue transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-xl mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-secondary-dark hover:text-primary-blue hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setSearchModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-secondary-dark py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">搜索</span>
                </button>
                <Link
                  href="/contact"
                  className="btn-primary text-sm w-full text-center block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </header>
  )
}