import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: '外国人如何投资日本太阳能电站？',
      excerpt: '详细介绍海外华人投资日本太阳能电站的完整流程，包括法律手续、资金准备、项目选择等关键步骤。',
      author: 'Sakura太阳能源投资团队',
      date: '2025-01-27',
      readTime: '8分钟',
      category: '投资指南',
      slug: 'foreigners-invest-japan-solar',
      keywords: '外国人投资日本太阳能,海外华人投资,日本太阳能电站投资流程'
    },
    {
      id: 2,
      title: '日本太阳能投资回报率分析',
      excerpt: '深入分析日本太阳能电站投资的真实回报率，包括FIT制度、电费收益、运营成本等详细计算。',
      author: 'Sakura太阳能源投资团队',
      date: '2025-01-25',
      readTime: '10分钟',
      category: '收益分析',
      slug: 'japan-solar-roi-analysis',
      keywords: '日本太阳能投资回报率,15%年化收益,日本电费收益分析'
    },
    {
      id: 3,
      title: '日本政府FIT政策与光伏电价解读',
      excerpt: '全面解读日本政府FIT（固定价格收购）政策，分析光伏电价变化趋势对投资的影响。',
      author: 'Sakura太阳能源投资团队',
      date: '2025-01-23',
      readTime: '12分钟',
      category: '政策解读',
      slug: 'japan-fit-policy-solar-tariff',
      keywords: '日本FIT政策,光伏电价,日本可再生能源政策'
    },
    {
      id: 4,
      title: '真实案例：投资300万买日本电站，一年赚45万',
      excerpt: '分享真实投资案例，详细分析300万投资日本太阳能电站的实际收益情况，为投资者提供参考。',
      author: 'Sakura太阳能源投资团队',
      date: '2025-01-20',
      readTime: '6分钟',
      category: '案例分享',
      slug: 'real-case-3million-japan-solar',
      keywords: '日本太阳能投资案例,300万投资,年赚45万,真实收益案例'
    }
  ]

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            投资知识分享
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专业的日本太阳能电站投资知识，帮助您做出明智的投资决策
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 btn-hover group"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-green transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-green hover:text-green-600 transition-colors font-semibold"
                  >
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            想了解更多投资知识？
          </h3>
          <p className="text-lg text-green-100 mb-6">
            我们的专业团队随时为您提供投资咨询服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-green px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              立即咨询
            </a>
            <a
              href="/faq"
              className="bg-primary-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
            >
              查看常见问题
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogList
