import { Calendar, Clock, CheckCircle } from 'lucide-react'

const ProcessTimeline = () => {
  const timeline = [
    {
      phase: '咨询阶段',
      duration: '1-3天',
      activities: [
        '初次电话/邮件咨询',
        '投资顾问详细介绍项目',
        '根据预算推荐合适项目',
        '安排日本考察行程'
      ],
      status: 'completed'
    },
    {
      phase: '考察阶段',
      duration: '3-5天',
      activities: [
        '安排日本考察行程',
        '实地参观太阳能电站',
        '了解当地环境和政策',
        '与当地团队交流'
      ],
      status: 'completed'
    },
    {
      phase: '签约阶段',
      duration: '1-2周',
      activities: [
        '详细审查投资合同',
        '完成法律手续办理',
        '资金转账和确认',
        '获得项目所有权证书'
      ],
      status: 'in_progress'
    },
    {
      phase: '运营阶段',
      duration: '20年',
      activities: [
        '专业团队日常运维',
        '24小时监控运行状态',
        '定期维护和优化',
        '每月收益分成'
      ],
      status: 'pending'
    },
    {
      phase: '退出阶段',
      duration: '随时',
      activities: [
        '申请回购退出',
        '评估回购价格',
        '完成退出手续',
        '资金安全到账'
      ],
      status: 'pending'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in_progress':
        return 'bg-primary-gold'
      case 'pending':
        return 'bg-gray-300'
      default:
        return 'bg-gray-300'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-white" />
      case 'in_progress':
        return <Clock className="w-5 h-5 text-white" />
      case 'pending':
        return <Calendar className="w-5 h-5 text-white" />
      default:
        return <Calendar className="w-5 h-5 text-white" />
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            投资时间线
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            清晰的时间规划，让您了解每个阶段的具体安排和预期时间
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-green"></div>

          <div className="space-y-12">
            {timeline.map((phase, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {phase.phase}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 ${getStatusColor(phase.status)} rounded-full flex items-center justify-center`}>
                          {getStatusIcon(phase.status)}
                        </div>
                        <span className="text-sm text-gray-500">
                          {phase.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-8 h-8 bg-primary-green rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              投资周期总结
            </h3>
            <p className="text-gray-600">
              从咨询到开始获得收益，整个投资周期约2-4周
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-green mb-2">1-3天</div>
              <div className="text-gray-600">咨询阶段</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">3-5天</div>
              <div className="text-gray-600">考察阶段</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">1-2周</div>
              <div className="text-gray-600">签约阶段</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gray mb-2">20年</div>
              <div className="text-gray-600">运营收益</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline



