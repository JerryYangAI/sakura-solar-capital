import { Users, MapPin, Zap, Award } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: '成功投资者',
      description: '来自全球华语地区的投资者'
    },
    {
      icon: MapPin,
      value: '1000+',
      label: '太阳能电站',
      description: '遍布日本47个都道府县'
    },
    {
      icon: Zap,
      value: '15%',
      label: '平均年化收益',
      description: '稳定的电费收益回报'
    },
    {
      icon: Award,
      value: '100%',
      label: '合规运营',
      description: '完全符合日本法律法规'
    }
  ]

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的成就
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            数字见证我们的专业实力和客户信任
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-green to-primary-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-primary-gray mb-2">
                {stat.label}
              </div>
              
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            投资成功率统计
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">电站运营稳定性</span>
                <span className="text-primary-green font-bold">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary-green h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">客户满意度</span>
                <span className="text-primary-gold font-bold">99%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary-gold h-3 rounded-full" style={{ width: '99%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">收益达成率</span>
                <span className="text-primary-blue font-bold">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary-blue h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
