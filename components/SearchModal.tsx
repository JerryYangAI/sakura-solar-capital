'use client'

import { useState, useEffect } from 'react'
import { Search, X, FileText, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: 'page' | 'blog' | 'project' | 'faq'
}

const searchData: SearchResult[] = [
  // 页面
  { id: 'home', title: '首页', description: 'Sakura太阳能源投资主页', url: '/', type: 'page' },
  { id: 'about', title: '关于我们', description: '了解Sakura太阳能源投资公司', url: '/about', type: 'page' },
  { id: 'projects', title: '电站投资', description: '查看日本太阳能电站投资项目', url: '/projects', type: 'page' },
  { id: 'process', title: '投资流程', description: '了解投资流程和步骤', url: '/process', type: 'page' },
  { id: 'visit', title: '考察服务', description: '日本考察服务预约', url: '/visit', type: 'page' },
  { id: 'faq', title: '常见问答', description: '投资相关问题解答', url: '/faq', type: 'page' },
  { id: 'contact', title: '联系我们', description: '联系方式和咨询表单', url: '/contact', type: 'page' },
  
  // 博客文章
  { id: 'blog-roi', title: '日本太阳能投资回报率分析', description: '深入分析日本太阳能电站投资的真实回报率', url: '/blog/japan-solar-roi-analysis', type: 'blog' },
  { id: 'blog-fit', title: '日本FIT政策与太阳能电价', description: '了解日本FIT制度和太阳能电价政策', url: '/blog/japan-fit-policy-solar-tariff', type: 'blog' },
  { id: 'blog-foreigners', title: '外国人如何投资日本太阳能', description: '海外华人投资日本太阳能的完整指南', url: '/blog/foreigners-invest-japan-solar', type: 'blog' },
  { id: 'blog-case', title: '300万投资日本太阳能真实案例', description: '真实投资案例分析', url: '/blog/real-case-3million-japan-solar', type: 'blog' },
  
  // 项目
  { id: 'project-1', title: '大阪府太阳能电站项目 #001', description: '大阪府大阪市阿倍野区1000kW太阳能电站', url: '/projects/project-1', type: 'project' },
  { id: 'project-2', title: '大阪府太阳能电站项目 #002', description: '大阪府1500kW大型太阳能电站', url: '/projects/project-2', type: 'project' },
  { id: 'project-3', title: '神奈川县太阳能电站项目 #003', description: '神奈川县1200kW优质太阳能电站', url: '/projects/project-3', type: 'project' },
  
  // FAQ
  { id: 'faq-1', title: '什么是日本太阳能电站投资？', description: '了解日本太阳能电站投资的基本概念', url: '/faq#faq-1', type: 'faq' },
  { id: 'faq-2', title: '日本太阳能电站多少钱？', description: '投资金额和价格范围', url: '/faq#faq-2', type: 'faq' },
  { id: 'faq-3', title: '年化收益15%是否真实？', description: '投资回报率分析', url: '/faq#faq-3', type: 'faq' },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  const getIcon = (type: string) => {
    switch (type) {
      case 'page':
        return <FileText className="w-4 h-4" />
      case 'blog':
        return <FileText className="w-4 h-4" />
      case 'project':
        return <MapPin className="w-4 h-4" />
      case 'faq':
        return <Users className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'page':
        return '页面'
      case 'blog':
        return '文章'
      case 'project':
        return '项目'
      case 'faq':
        return '问答'
      default:
        return '内容'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
          {/* Header */}
          <div className="flex items-center p-6 border-b border-gray-200">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索页面、文章、项目..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim() ? (
              results.length > 0 ? (
                <div className="p-2">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={onClose}
                      className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-blue/10 rounded-lg flex items-center justify-center text-primary-blue mr-3 group-hover:bg-primary-blue/20 transition-colors">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {result.title}
                          </h3>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>没有找到相关结果</p>
                  <p className="text-sm">请尝试其他关键词</p>
                </div>
              )
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>输入关键词开始搜索</p>
                <p className="text-sm">搜索页面、文章、项目或常见问题</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
