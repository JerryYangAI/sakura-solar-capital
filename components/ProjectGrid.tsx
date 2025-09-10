'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Zap, TrendingUp, Calendar, Eye } from 'lucide-react'
import { projects, Project } from '@/data/projects'

interface ProjectGridProps {
  selectedPriceRange?: string
}

export default function ProjectGrid({ selectedPriceRange }: ProjectGridProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = selectedPriceRange 
    ? projects.filter(project => project.priceRange === selectedPriceRange)
    : projects

  return (
    <div className="py-16 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            精选日本太阳能电站项目
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            我们为您精心挑选了优质的日本太阳能电站项目，每个项目都经过严格筛选和评估
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-professional group hover:shadow-professional-lg transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
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

                {/* Quick Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center text-white">
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.capacity}kW</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.annualReturn}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary-blue transition-colors duration-200">
                  {project.name}
                </h3>
                
                <div className="flex items-center text-secondary-gray mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-secondary-gray text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-blue">{project.investment}万</div>
                    <div className="text-xs text-secondary-gray">投资额(人民币)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-green">{project.area.toLocaleString()}</div>
                    <div className="text-xs text-secondary-gray">面积(平方米)</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.features.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 btn-primary text-sm text-center"
                  >
                    查看详情
                  </Link>
                  <button className="px-3 py-2 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-white rounded-2xl p-8 shadow-professional">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              想了解更多投资信息？
            </h3>
            <p className="text-secondary-gray">
              我们为您准备了详细的投资指南和知识分享
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/process" className="block p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary-dark mb-2">投资流程</h4>
              <p className="text-secondary-gray text-sm">了解完整的日本太阳能电站投资流程</p>
            </a>

            <a href="/blog" className="block p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary-dark mb-2">投资知识</h4>
              <p className="text-secondary-gray text-sm">学习专业的投资知识和案例分析</p>
            </a>

            <a href="/faq" className="block p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary-dark mb-2">常见问题</h4>
              <p className="text-secondary-gray text-sm">查看投资者最关心的问题解答</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}