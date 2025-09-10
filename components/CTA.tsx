import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-primary-blue to-primary-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            开始您的日本太阳能投资之旅
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Sakura太阳能源投资的专业团队将为您提供一对一的投资咨询服务，
            从项目选择到收益分成，全程为您保驾护航。
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">电话咨询</h3>
              <p className="text-blue-100 text-sm">+81-3-1234-5678</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">邮件咨询</h3>
              <p className="text-blue-100 text-sm">info@sakurasolarcapital.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <ArrowRight className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">在线咨询</h3>
              <p className="text-blue-100 text-sm">填写咨询表单</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-primary-dark font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              立即咨询
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              查看项目
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}