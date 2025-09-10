import { Linkedin, Mail } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: '田中一郎',
      position: '首席执行官',
      description: '拥有15年金融投资经验，曾在日本三大银行担任高管职务',
      image: '/team/ceo.jpg',
      linkedin: '#',
      email: 'tanaka@sakurasolarcapital.com'
    },
    {
      name: '李小明',
      position: '首席投资官',
      description: '专注于新能源投资领域，拥有丰富的项目评估和管理经验',
      image: '/team/cio.jpg',
      linkedin: '#',
      email: 'li@sakurasolarcapital.com'
    },
    {
      name: '佐藤花子',
      position: '运营总监',
      description: '负责电站日常运营管理，确保项目稳定高效运行',
      image: '/team/coo.jpg',
      linkedin: '#',
      email: 'sato@sakurasolarcapital.com'
    },
    {
      name: '王大明',
      position: '技术总监',
      description: '新能源技术专家，负责电站技术升级和运维优化',
      image: '/team/cto.jpg',
      linkedin: '#',
      email: 'wang@sakurasolarcapital.com'
    },
    {
      name: '山田太郎',
      position: '法务总监',
      description: '资深律师，确保所有投资项目符合日本法律法规',
      image: '/team/legal.jpg',
      linkedin: '#',
      email: 'yamada@sakurasolarcapital.com'
    },
    {
      name: '陈美丽',
      position: '客户关系总监',
      description: '负责客户服务和关系维护，提供专业的投资咨询',
      image: '/team/crm.jpg',
      linkedin: '#',
      email: 'chen@sakurasolarcapital.com'
    }
  ]

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            专业团队
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的团队由来自金融、新能源、法律等领域的资深专家组成，
            为投资者提供最专业的服务和保障
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 btn-hover group"
            >
              {/* Member Photo Placeholder */}
              <div className="h-64 bg-gradient-to-br from-primary-green to-primary-blue flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm opacity-80">专业头像</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <div className="text-primary-green font-semibold mb-3">
                  {member.position}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              团队实力
            </h3>
            <p className="text-gray-600">
              我们的专业团队为您的投资保驾护航
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-green mb-2">15+</div>
              <div className="text-gray-600">平均从业年限</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">100+</div>
              <div className="text-gray-600">成功投资项目</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-gold mb-2">99%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
