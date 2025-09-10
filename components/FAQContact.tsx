import { Phone, Mail, MessageCircle, Clock, Users, CheckCircle } from 'lucide-react'

const FAQContact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: '电话咨询',
      description: '直接与我们的投资顾问通话',
      contact: '+81-3-1234-5678',
      availability: '周一至周五 9:00-18:00',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: '邮件咨询',
      description: '发送邮件获取详细资料',
      contact: 'info@sakurasolarcapital.com',
      availability: '24小时内回复',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: '微信咨询',
      description: '添加客服微信在线咨询',
      contact: '扫描二维码添加',
      availability: '随时在线',
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const serviceFeatures = [
    {
      icon: CheckCircle,
      title: '专业团队',
      description: '15年以上投资经验的专业团队'
    },
    {
      icon: CheckCircle,
      title: '快速响应',
      description: '24小时内回复您的咨询'
    },
    {
      icon: CheckCircle,
      title: '免费服务',
      description: '所有咨询服务完全免费'
    },
    {
      icon: CheckCircle,
      title: '全程指导',
      description: '从咨询到投资的全程专业指导'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            还有疑问？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的专业团队随时为您解答投资相关问题，
            提供最专业的投资咨询服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover text-center"
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
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              我们的服务优势
            </h3>
            <p className="text-gray-600">
              选择我们，享受最专业的投资服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="mt-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              快速咨询
            </h3>
            <p className="text-lg text-green-100">
              填写简单信息，我们将在24小时内与您联系
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="联系电话"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="邮箱地址"
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <textarea
                placeholder="您的问题或需求"
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-primary-green px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-primary-green" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">营业时间</div>
                <div className="text-gray-600">周一至周五 9:00-18:00</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-primary-blue" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">专业团队</div>
                <div className="text-gray-600">15年以上投资经验</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-gold" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">服务保障</div>
                <div className="text-gray-600">24小时内回复</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQContact



