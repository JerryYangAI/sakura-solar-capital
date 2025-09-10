import { MessageCircle, Plane, FileText, Settings, DollarSign, RotateCcw } from 'lucide-react'

const ProcessSteps = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: '在线咨询',
      description: '通过电话、邮件或微信与我们联系，了解投资详情',
      details: [
        '专业投资顾问一对一咨询',
        '详细解答投资相关问题',
        '根据预算推荐合适项目',
        '提供投资方案建议'
      ],
      color: 'from-primary-green to-green-600'
    },
    {
      icon: Plane,
      title: '来日考察',
      description: '安排日本实地考察，深入了解项目情况',
      details: [
        '免费机场接送服务（成田/羽田）',
        '豪华酒店住宿安排',
        '精致餐饮和茶道体验',
        '专车接送和景点观光',
        '实地参观多个太阳能电站',
        '专业团队全程陪同服务'
      ],
      color: 'from-primary-blue to-blue-600'
    },
    {
      icon: FileText,
      title: '签约购入',
      description: '签署投资合同，完成法律手续和资金投入',
      details: [
        '详细审查投资合同条款',
        '协助完成法律手续',
        '安全便捷的资金转账',
        '获得项目所有权证书'
      ],
      color: 'from-primary-gold to-yellow-500'
    },
    {
      icon: Settings,
      title: '运维管理',
      description: '专业团队负责电站日常运营和维护管理',
      details: [
        '24小时监控电站运行状态',
        '定期维护和故障处理',
        '优化发电效率',
        '提供运营报告'
      ],
      color: 'from-primary-gray to-gray-600'
    },
    {
      icon: DollarSign,
      title: '收益分成',
      description: '定期获得电费收益，享受稳定投资回报',
      details: [
        '每月电费收益自动到账',
        '详细收益报告和明细',
        '税务处理协助',
        '收益再投资建议'
      ],
      color: 'from-primary-green to-green-600'
    },
    {
      icon: RotateCcw,
      title: '回购退出',
      description: '提供灵活的回购机制，确保投资流动性',
      details: [
        '随时申请回购退出',
        '公平合理的回购价格',
        '快速便捷的退出流程',
        '资金安全到账保障'
      ],
      color: 'from-primary-blue to-blue-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            六步投资流程
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从初次咨询到获得收益，我们为您提供全程专业服务，
            让投资过程变得简单透明
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              全程专业服务
            </h3>
            <p className="text-lg text-green-100 mb-6">
              我们的专业团队将在每个环节为您提供最优质的服务，
              确保您的投资安全、收益稳定
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-green-100">客户服务支持</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-green-100">合规合法运营</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-green-100">平均年化收益</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps

