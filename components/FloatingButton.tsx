'use client'

import { useState } from 'react'
import { MessageCircle, X, Phone, Mail } from 'lucide-react'

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-blue to-primary-green text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80 max-w-sm">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src="/logo.svg"
                alt="Sakura太阳能源投资"
                className="h-8 w-auto"
              />
            </div>
            
            <h3 className="text-lg font-semibold text-primary-dark mb-2">
              立即咨询
            </h3>
            <p className="text-sm text-secondary-gray mb-6">
              我们的专业团队将为您提供一对一的投资咨询服务
            </p>

            {/* Contact Options */}
            <div className="space-y-3">
              <a
                href="tel:+81-3-1234-5678"
                className="flex items-center justify-center space-x-2 w-full bg-primary-blue text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">电话咨询</span>
              </a>
              
              <a
                href="mailto:info@sakurasolarcapital.com"
                className="flex items-center justify-center space-x-2 w-full bg-primary-green text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">邮件咨询</span>
              </a>
              
              <a
                href="/contact"
                className="flex items-center justify-center space-x-2 w-full border-2 border-primary-blue text-primary-blue py-3 px-4 rounded-lg hover:bg-primary-blue hover:text-white transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">在线咨询</span>
              </a>
            </div>

            {/* WeChat QR Code Placeholder */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-secondary-gray mb-3">扫码添加微信</p>
              <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-xs text-gray-500">微信二维码</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}