import { Plane, Hotel, Utensils, Car, MapPin, Users, Clock, Shield } from 'lucide-react'

const VisitServices = () => {
  const services = [
    {
      icon: Plane,
      title: '免费接机服务',
      description: '我们提供免费的机场接送服务，让您的日本之行更加便捷',
      details: [
        '成田机场/羽田机场免费接机',
        '专业司机和豪华车辆',
        '中文导游陪同',
        '行李搬运服务'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Hotel,
      title: '豪华酒店住宿',
      description: '为您安排东京市中心的豪华酒店，享受舒适的住宿体验',
      details: [
        '五星级酒店标准间',
        '市中心黄金地段',
        '免费WiFi和早餐',
        '24小时客房服务'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Utensils,
      title: '精致餐饮安排',
      description: '品尝正宗的日本料理，体验地道的日式美食文化',
      details: [
        '米其林推荐餐厅',
        '传统日式料理',
        '中餐和西餐选择',
        '特色茶道体验'
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Car,
      title: '专车接送服务',
      description: '全程专车接送，让您的考察行程更加舒适便捷',
      details: [
        '豪华商务车接送',
        '专业司机服务',
        '灵活行程安排',
        '景点观光服务'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: '实地电站参观',
      description: '参观多个太阳能电站项目，深入了解投资机会',
      details: [
        '多个电站项目参观',
        '专业技术人员讲解',
        '发电设备详细介绍',
        '运营数据展示'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: '专业团队接待',
      description: '我们的专业团队全程陪同，提供最优质的服务',
      details: [
        '投资顾问全程陪同',
        '技术专家现场讲解',
        '法律顾问答疑解惑',
        '翻译服务支持'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            全方位考察服务
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们为您提供免费的日本考察服务，让您在投资前充分了解项目情况，
            确保投资决策的准确性和安全性
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-hover group"
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
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

        {/* Service Highlights */}
        <div className="mt-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              服务亮点
            </h3>
            <p className="text-lg text-green-100">
              我们致力于为您提供最优质的考察体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2">3-5天</div>
              <div className="text-green-100">考察行程</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-green-100">免费服务</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-green-100">专业陪同</div>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2">5+</div>
              <div className="text-green-100">电站参观</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitServices



