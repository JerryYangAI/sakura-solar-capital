import { Target, Eye, Users, Award } from 'lucide-react'

const CompanyStory = () => {
  const milestones = [
    {
      year: '2018',
      title: '公司成立',
      description: '在日本东京成立，专注于太阳能电站投资业务'
    },
    {
      year: '2019',
      title: '首个项目',
      description: '成功投资第一个100MW太阳能电站项目'
    },
    {
      year: '2020',
      title: '业务扩展',
      description: '在香港设立分部，服务全球华语投资者'
    },
    {
      year: '2021',
      title: '规模突破',
      description: '累计投资电站数量突破500座'
    },
    {
      year: '2022',
      title: '技术升级',
      description: '引入AI智能运维管理系统'
    },
    {
      year: '2023',
      title: '国际认证',
      description: '获得ISO 14001环境管理体系认证'
    },
    {
      year: '2024',
      title: '里程碑',
      description: '累计为投资者创造收益超过10亿日元'
    },
    {
      year: '2025',
      title: '未来展望',
      description: '计划扩展到北美市场，服务更多投资者'
    }
  ]

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">我们的使命</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              通过专业的投资管理和技术创新，为全球华人提供安全、稳定、高收益的日本太阳能电站投资机会，
              推动绿色能源的普及和发展，实现投资者与环境的双赢。
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">我们的愿景</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              成为全球领先的太阳能电站投资平台，让每一位投资者都能享受到绿色能源带来的稳定收益，
              为构建可持续发展的未来贡献力量。
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-xl text-gray-600">我们坚持的核心理念</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">客户至上</h3>
              <p className="text-gray-600">
                始终将客户利益放在首位，提供最优质的服务和投资机会
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">专业诚信</h3>
              <p className="text-gray-600">
                以专业的态度和诚信的原则，为每一位投资者提供可靠的投资服务
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">持续创新</h3>
              <p className="text-gray-600">
                不断优化投资策略和管理模式，为客户创造更大的价值
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-xl text-gray-600">见证我们的成长足迹</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-green"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-primary-green mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-primary-green rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory

