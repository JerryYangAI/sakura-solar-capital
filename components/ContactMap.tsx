import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactMap = () => {
  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            我们的位置
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们在日本和香港都设有办公室，为全球华语投资者提供便捷的服务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tokyo Office */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-green to-primary-blue rounded-xl p-6 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-8 h-8" />
                <h3 className="text-2xl font-bold">日本总部</h3>
              </div>
              <p className="text-green-100">
                大阪府大阪市阿倍野区阿倍野筋1-1-43<br />
                阿倍野Harukas 35F
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">联系信息</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-green" />
                  <span className="text-gray-700">+81-3-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-blue" />
                  <span className="text-gray-700">tokyo@sakurasolarcapital.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-gold" />
                  <span className="text-gray-700">周一至周五 9:00-18:00</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>大阪办公室地图</p>
                <p className="text-sm">阿倍野Harukas</p>
              </div>
            </div>
          </div>

          {/* Hong Kong Office */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-xl p-6 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-8 h-8" />
                <h3 className="text-2xl font-bold">香港分部</h3>
              </div>
              <p className="text-blue-100">
                香港中环国际金融中心2期<br />
                88楼 8801室
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">联系信息</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-green" />
                  <span className="text-gray-700">+852-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-blue" />
                  <span className="text-gray-700">hongkong@sakurasolarcapital.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-gold" />
                  <span className="text-gray-700">周一至周五 9:00-18:00</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>香港办公室地图</p>
                <p className="text-sm">国际金融中心2期</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              交通指南
            </h3>
            <p className="text-gray-600">
              如何到达我们的办公室
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">大阪办公室</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 地铁御堂筋线「天王寺站」步行3分钟</li>
                <li>• 地铁谷町线「天王寺站」步行3分钟</li>
                <li>• 地铁堺筋线「动物园前站」步行5分钟</li>
                <li>• 关西国际机场：乘坐南海电铁约45分钟</li>
                <li>• 伊丹机场：乘坐大阪单轨电车约30分钟</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">香港办公室</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 地铁港岛线「中环站」A出口步行3分钟</li>
                <li>• 地铁荃湾线「中环站」A出口步行3分钟</li>
                <li>• 机场快线「香港站」步行5分钟</li>
                <li>• 香港国际机场：乘坐机场快线约24分钟</li>
                <li>• 深圳湾口岸：乘坐巴士约1小时</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visit Instructions */}
        <div className="mt-12 bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              预约访问
            </h3>
            <p className="text-lg text-green-100 mb-6">
              我们建议您提前预约访问时间，以便我们为您安排最合适的接待服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+81-3-1234-5678"
                className="bg-white text-primary-green px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                预约大阪办公室
              </a>
              <a
                href="tel:+852-1234-5678"
                className="bg-primary-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
              >
                预约香港办公室
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap

