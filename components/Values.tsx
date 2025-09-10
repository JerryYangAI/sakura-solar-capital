import { Shield, Zap, Globe, Heart } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: '安全可靠',
      description: '所有投资项目均经过严格筛选和风险评估，确保投资安全',
      details: [
        '100% 合法合规运营',
        '多重风险控制机制',
        '专业法律团队保障',
        '透明化投资流程'
      ]
    },
    {
      icon: Zap,
      title: '高效收益',
      description: '专业的投资管理团队，确保投资者获得稳定可观的收益',
      details: [
        '15% 平均年化收益率',
        '稳定的电费收入',
        '专业的运维管理',
        '实时收益监控'
      ]
    },
    {
      icon: Globe,
      title: '绿色环保',
      description: '投资绿色能源，为环境保护和可持续发展贡献力量',
      details: [
        '清洁能源投资',
        '减少碳排放',
        '可持续发展理念',
        '环保社会责任'
      ]
    },
    {
      icon: Heart,
      title: '客户服务',
      description: '提供全方位的客户服务，让投资过程简单便捷',
      details: [
        '一对一专业咨询',
        '全程投资指导',
        '定期收益报告',
        '24小时客户支持'
      ]
    }
  ]

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的优势
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sakura太阳能源投资凭借专业的团队、丰富的经验和优质的服务，
            为投资者提供最可靠的投资保障
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-green mb-2">6年</div>
              <div className="text-gray-600">专业运营经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">50+</div>
              <div className="text-gray-600">专业团队成员</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">100%</div>
              <div className="text-gray-600">合规运营记录</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gray mb-2">24/7</div>
              <div className="text-gray-600">客户服务支持</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
