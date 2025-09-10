import { Phone, Mail, MapPin, Clock, Users, MessageCircle } from 'lucide-react'

const ContactInfo = () => {
  const offices = [
    {
      name: '日本总部',
      address: '大阪府大阪市阿倍野区阿倍野筋1-1-43',
      phone: '+81-3-1234-5678',
      email: 'tokyo@sakurasolarcapital.com',
      hours: '周一至周五 9:00-18:00',
      icon: MapPin,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: '香港分部',
      address: '香港中环国际金融中心2期',
      phone: '+852-1234-5678',
      email: 'hongkong@sakurasolarcapital.com',
      hours: '周一至周五 9:00-18:00',
      icon: MapPin,
      color: 'from-green-500 to-green-600'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: '电话咨询',
      description: '直接与投资顾问通话',
      contact: '+81-3-1234-5678',
      availability: '周一至周五 9:00-18:00',
      color: 'from-primary-green to-green-600'
    },
    {
      icon: Mail,
      title: '邮件咨询',
      description: '发送邮件获取详细资料',
      contact: 'info@sakurasolarcapital.com',
      availability: '24小时内回复',
      color: 'from-primary-blue to-blue-600'
    },
    {
      icon: MessageCircle,
      title: '微信咨询',
      description: '添加客服微信在线咨询',
      contact: '扫描二维码添加',
      availability: '随时在线',
      color: 'from-primary-gold to-yellow-500'
    }
  ]

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            联系方式
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供多种联系方式，让您随时与我们取得联系
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 btn-hover"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${office.color} rounded-lg flex items-center justify-center mr-4`}>
                  <office.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {office.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-green mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">地址</div>
                    <div className="text-gray-600">{office.address}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-blue" />
                  <div>
                    <div className="font-semibold text-gray-900">电话</div>
                    <div className="text-gray-600">{office.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-gold" />
                  <div>
                    <div className="font-semibold text-gray-900">邮箱</div>
                    <div className="text-gray-600">{office.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-gray" />
                  <div>
                    <div className="font-semibold text-gray-900">营业时间</div>
                    <div className="text-gray-600">{office.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 btn-hover"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {method.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {method.description}
              </p>

              <div className="text-primary-green font-semibold mb-2">
                {method.contact}
              </div>

              <div className="text-sm text-gray-500">
                {method.availability}
              </div>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              我们的服务承诺
            </h3>
            <p className="text-lg text-green-100">
              我们致力于为每一位投资者提供最优质的服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">专业团队</div>
              <div className="text-green-100 text-sm">15年以上投资经验</div>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">快速响应</div>
              <div className="text-green-100 text-sm">24小时内回复</div>
            </div>
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">免费咨询</div>
              <div className="text-green-100 text-sm">所有服务完全免费</div>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-gold mx-auto mb-3" />
              <div className="text-lg font-semibold mb-2">全球服务</div>
              <div className="text-green-100 text-sm">服务全球华语投资者</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo

