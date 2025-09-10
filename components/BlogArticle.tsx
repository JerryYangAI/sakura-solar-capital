import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'

interface BlogArticleProps {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  content: string
}

const BlogArticle = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  content
}: BlogArticleProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-green to-primary-blue py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="inline-flex items-center space-x-2 text-white hover:text-green-100 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回博客列表</span>
          </a>

          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
            <span className="text-white/80 text-sm">{readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>

          <p className="text-xl text-green-100 mb-6">
            {excerpt}
          </p>

          <div className="flex items-center space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                分享这篇文章
              </h3>
              <p className="text-gray-600">
                帮助更多人了解日本太阳能电站投资
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            相关文章
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/blog/japan-solar-roi-analysis"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                日本太阳能投资回报率分析
              </h4>
              <p className="text-gray-600 text-sm">
                深入分析日本太阳能电站投资的真实回报率
              </p>
            </a>
            <a
              href="/blog/japan-fit-policy-solar-tariff"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                日本政府FIT政策与光伏电价解读
              </h4>
              <p className="text-gray-600 text-sm">
                全面解读日本政府FIT政策
              </p>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            准备开始您的日本太阳能电站投资之旅？
          </h3>
          <p className="text-lg text-green-100 mb-6">
            我们的专业团队将为您提供一对一的投资咨询服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-green px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              立即咨询
            </a>
            <a
              href="/projects"
              className="bg-primary-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
            >
              查看项目
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle
