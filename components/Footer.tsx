import Link from 'next/link'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const navigation = {
  main: [
    { name: '首页', href: '/' },
    { name: '关于我们', href: '/about' },
    { name: '投资项目', href: '/projects' },
    { name: '投资知识', href: '/blog' },
    { name: '常见问答', href: '/faq' },
    { name: '联系我们', href: '/contact' },
  ],
  projects: [
    { name: '电站项目', href: '/projects' },
    { name: '投资流程', href: '/process' },
    { name: '考察服务', href: '/visit' },
  ],
  support: [
    { name: '投资指南', href: '/blog' },
    { name: '常见问题', href: '/faq' },
    { name: '联系我们', href: '/contact' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.svg"
                alt="Sakura太阳能源投资"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Sakura太阳能源投资专注于为全球华人提供日本光伏投资服务，
              投资额200-500万人民币，拥有土地与电站产权，年化收益15%。
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary-green" />
                <span>日本大阪府大阪市阿倍野区</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary-green" />
                <span>+81-3-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary-green" />
                <span>info@sakurasolarcapital.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">网站导航</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary-green transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-6">投资项目</h3>
            <ul className="space-y-3">
              {navigation.projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary-green transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">客户服务</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary-green transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sakura Solar Capital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-green text-sm transition-colors duration-200">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-green text-sm transition-colors duration-200">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}