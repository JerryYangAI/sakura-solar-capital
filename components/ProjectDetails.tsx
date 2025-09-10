import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Zap, TrendingUp, Calendar, ArrowLeft, CheckCircle, Shield, RotateCcw } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="py-16 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-primary-blue hover:text-primary-green transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回项目列表</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Images */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  project.status === 'available' 
                    ? 'bg-green-500 text-white' 
                    : project.status === 'sold'
                    ? 'bg-red-500 text-white'
                    : 'bg-yellow-500 text-white'
                }`}>
                  {project.status === 'available' ? '可投资' : 
                   project.status === 'sold' ? '已售出' : '已预订'}
                </span>
              </div>
            </div>

            {/* Additional Images Placeholder */}
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">图片2</span>
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">图片3</span>
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">图片4</span>
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-8">
            {/* Basic Info */}
            <div>
              <h1 className="text-3xl font-bold text-primary-dark mb-4">
                {project.name}
              </h1>
              
              <div className="flex items-center text-secondary-gray mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{project.location}</span>
              </div>

              <p className="text-secondary-gray leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-professional text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">{project.investment}万</div>
                <div className="text-secondary-gray">投资额(人民币)</div>
              </div>
              <div className="card-professional text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">{project.annualReturn}%</div>
                <div className="text-secondary-gray">年化收益率</div>
              </div>
              <div className="card-professional text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">{project.capacity}kW</div>
                <div className="text-secondary-gray">装机容量</div>
              </div>
              <div className="card-professional text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">{project.area.toLocaleString()}</div>
                <div className="text-secondary-gray">面积(平方米)</div>
              </div>
            </div>

            {/* Project Features */}
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">项目特色</h3>
              <div className="grid grid-cols-1 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0" />
                    <span className="text-secondary-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Highlights */}
            <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">投资亮点</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">土地+电站完整产权</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">年化收益15%稳定</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">20年回购保障</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">专业运营维护</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 text-center">
                立即咨询投资
              </button>
              <button className="btn-secondary flex-1 text-center">
                预约实地考察
              </button>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary-dark mb-8 text-center">
            相关推荐项目
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* This would be populated with related projects */}
            <div className="card-professional text-center">
              <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">相关项目1</span>
              </div>
              <h4 className="font-semibold text-primary-dark mb-2">推荐项目1</h4>
              <p className="text-sm text-secondary-gray">投资额: 350万人民币</p>
            </div>
            <div className="card-professional text-center">
              <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">相关项目2</span>
              </div>
              <h4 className="font-semibold text-primary-dark mb-2">推荐项目2</h4>
              <p className="text-sm text-secondary-gray">投资额: 480万人民币</p>
            </div>
            <div className="card-professional text-center">
              <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">相关项目3</span>
              </div>
              <h4 className="font-semibold text-primary-dark mb-2">推荐项目3</h4>
              <p className="text-sm text-secondary-gray">投资额: 320万人民币</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}