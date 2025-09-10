import { Zap, TrendingUp, Shield, MapPin } from 'lucide-react'

export default function ProjectsHero() {
  return (
    <div className="bg-gradient-to-br from-primary-blue to-primary-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            日本太阳能电站投资项目
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            精选优质日本太阳能电站项目，投资额200-500万人民币，
            年化收益15%，拥有土地与电站完整产权，提供专业运营维护服务。
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1000+</div>
              <div className="text-sm text-blue-100">座电站项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15%</div>
              <div className="text-sm text-blue-100">年化收益率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">200-500万</div>
              <div className="text-sm text-blue-100">投资金额(人民币)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-sm text-blue-100">回购保障</div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">土地+电站产权</h3>
              <p className="text-blue-100 text-sm">拥有日本土地和太阳能电站的完整产权，投资安全有保障</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">稳定收益保障</h3>
              <p className="text-blue-100 text-sm">基于日本FIT制度的固定电价收购，收益稳定可预期</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">专业运营维护</h3>
              <p className="text-blue-100 text-sm">提供专业的电站运营维护服务，确保长期稳定收益</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}