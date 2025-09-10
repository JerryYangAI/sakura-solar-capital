import { Calendar, Clock, MapPin, Camera, Users, Coffee } from 'lucide-react'

const VisitItinerary = () => {
  const itineraries = [
    {
      day: 1,
      title: '抵达东京',
      activities: [
        {
          time: '09:00',
          activity: '成田机场接机',
          location: '成田国际机场',
          icon: Calendar,
          description: '专业司机和中文导游在机场迎接，协助办理入境手续'
        },
        {
          time: '11:00',
          activity: '前往酒店办理入住',
          location: '东京市中心豪华酒店',
          icon: MapPin,
          description: '入住五星级酒店，享受舒适的住宿环境'
        },
        {
          time: '12:30',
          activity: '欢迎午餐',
          location: '米其林推荐餐厅',
          icon: Coffee,
          description: '品尝正宗的日本料理，体验日式美食文化'
        },
        {
          time: '14:30',
          activity: '公司介绍和项目概览',
          location: '公司总部',
          icon: Users,
          description: '了解公司背景、投资理念和项目概况'
        },
        {
          time: '16:00',
          activity: '东京市区观光',
          location: '银座、浅草寺',
          icon: Camera,
          description: '游览东京著名景点，体验日本文化'
        },
        {
          time: '18:30',
          activity: '欢迎晚宴',
          location: '传统日式餐厅',
          icon: Coffee,
          description: '与公司高管共进晚餐，深入交流投资事宜'
        }
      ]
    },
    {
      day: 2,
      title: '电站实地考察',
      activities: [
        {
          time: '08:00',
          activity: '酒店早餐',
          location: '酒店餐厅',
          icon: Coffee,
          description: '享用丰盛的日式早餐，准备一天的考察行程'
        },
        {
          time: '09:30',
          activity: '前往第一个电站项目',
          location: '千叶县太阳能电站',
          icon: MapPin,
          description: '参观千叶县大型太阳能电站，了解项目规模'
        },
        {
          time: '11:00',
          activity: '电站技术讲解',
          location: '电站现场',
          icon: Users,
          description: '技术专家详细介绍发电设备、运维系统'
        },
        {
          time: '12:30',
          activity: '现场午餐',
          location: '电站附近餐厅',
          icon: Coffee,
          description: '在电站附近用餐，体验当地生活'
        },
        {
          time: '14:00',
          activity: '前往第二个电站项目',
          location: '茨城县太阳能电站',
          icon: MapPin,
          description: '参观茨城县中型太阳能电站，对比不同规模'
        },
        {
          time: '15:30',
          activity: '运营数据展示',
          location: '电站控制室',
          icon: Users,
          description: '查看实时发电数据、收益报表'
        },
        {
          time: '17:00',
          activity: '返回东京',
          location: '专车接送',
          icon: MapPin,
          description: '乘坐专车返回东京，途中讨论考察心得'
        },
        {
          time: '19:00',
          activity: '晚餐和讨论',
          location: '东京高级餐厅',
          icon: Coffee,
          description: '与投资顾问共进晚餐，深入讨论投资细节'
        }
      ]
    },
    {
      day: 3,
      title: '深度交流和决策',
      activities: [
        {
          time: '09:00',
          activity: '投资方案讨论',
          location: '公司会议室',
          icon: Users,
          description: '详细讨论投资方案、合同条款、风险控制'
        },
        {
          time: '11:00',
          activity: '法律文件审查',
          location: '法务部门',
          icon: Users,
          description: '法务顾问详细解释投资合同和法律保障'
        },
        {
          time: '12:30',
          activity: '商务午餐',
          location: '公司餐厅',
          icon: Coffee,
          description: '与公司高管共进午餐，进一步交流'
        },
        {
          time: '14:00',
          activity: '财务分析会议',
          location: '财务部门',
          icon: Users,
          description: '财务专家分析收益预期、税务处理等'
        },
        {
          time: '15:30',
          activity: '自由活动时间',
          location: '东京市区',
          icon: Camera,
          description: '自由购物或观光，体验东京生活'
        },
        {
          time: '18:00',
          activity: '告别晚宴',
          location: '传统日式餐厅',
          icon: Coffee,
          description: '丰盛的告别晚宴，庆祝考察圆满结束'
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            考察行程安排
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精心安排的3天考察行程，让您全面了解日本太阳能电站投资机会
          </p>
        </div>

        <div className="space-y-12">
          {itineraries.map((itinerary, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-green to-primary-blue p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{itinerary.day}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">第{itinerary.day}天</h3>
                    <p className="text-green-100">{itinerary.title}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {itinerary.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
                          <activity.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-lg font-bold text-primary-green">
                            {activity.time}
                          </span>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {activity.activity}
                          </h4>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{activity.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              考察须知
            </h3>
            <p className="text-gray-600">
              为了让您的考察更加顺利，请注意以下事项
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">准备事项</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">有效护照和签证</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">舒适的步行鞋</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">相机或手机拍照</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">笔记本记录要点</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">服务包含</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">机场接送服务</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">豪华酒店住宿</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">全程餐饮安排</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">专业陪同服务</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitItinerary



