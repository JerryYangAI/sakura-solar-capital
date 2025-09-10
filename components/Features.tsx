import React from 'react'
import { Zap, TrendingUp, Shield, RotateCcw, Globe, Users } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '1000座日本太阳能电站',
    description: '遍布日本各地的高质量光伏电站，经过严格筛选和评估，确保投资安全',
    color: 'text-primary-blue'
  },
  {
    icon: TrendingUp,
    title: '年化收益15%',
    description: '基于日本FIT制度的固定电价收购，收益稳定可预期，年化收益率15%',
    color: 'text-primary-green'
  },
  {
    icon: Shield,
    title: '土地+电站产权',
    description: '拥有日本土地和太阳能电站的完整产权，投资安全有法律保障',
    color: 'text-accent-blue'
  },
  {
    icon: RotateCcw,
    title: '回购保障',
    description: '提供电站回购服务，确保投资者可以灵活退出，降低投资风险',
    color: 'text-accent-orange'
  },
  {
    icon: Globe,
    title: '全球华人服务',
    description: '专为全球华人投资者设计，提供中文服务和本土化支持',
    color: 'text-primary-blue'
  },
  {
    icon: Users,
    title: '专业运营团队',
    description: '拥有专业的日本本土运营团队，提供电站维护和代运营服务',
    color: 'text-primary-green'
  }
]

export default function Features() {
  return (
    <div className="py-24 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            为什么选择Sakura太阳能源投资？
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            我们专注于为全球华人提供安全、稳定、高收益的日本太阳能电站投资服务
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-professional group hover:shadow-professional-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${feature.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(feature.icon, { className: `w-8 h-8 ${feature.color}` })}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-professional">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              准备开始您的日本太阳能投资之旅？
            </h3>
            <p className="text-secondary-gray mb-6 max-w-2xl mx-auto">
              我们的专业团队将为您提供一对一的投资咨询服务，
              从项目选择到收益分成，全程为您保驾护航。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                立即咨询
              </a>
              <a
                href="/projects"
                className="btn-secondary"
              >
                查看项目
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}