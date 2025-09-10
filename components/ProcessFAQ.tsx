'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ProcessFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '投资日本太阳能电站需要多少资金？',
      answer: '我们的投资项目价格范围在200-500万人民币之间，具体价格根据电站规模、地理位置和发电量等因素确定。我们提供灵活的投资方案，可以根据您的预算推荐合适的项目。'
    },
    {
      question: '投资流程需要多长时间？',
      answer: '从初次咨询到完成投资，整个流程大约需要2-4周时间。具体包括：咨询阶段1-3天，考察阶段3-5天，签约阶段1-2周。我们会全程协助您完成所有手续。'
    },
    {
      question: '需要亲自去日本考察吗？',
      answer: '我们强烈建议您亲自来日本考察，这样可以更直观地了解项目情况。我们提供免费的考察服务，包括接机、住宿、餐饮和实地参观等。如果您无法亲自考察，我们也可以提供详细的视频资料和报告。'
    },
    {
      question: '投资后如何获得收益？',
      answer: '投资后，您将获得电站的电费收益。日本政府通过FIT制度以固定价格收购太阳能发电，收益每月自动到账。我们提供详细的收益报告，并协助您处理相关税务问题。'
    },
    {
      question: '如果中途想要退出投资怎么办？',
      answer: '我们提供灵活的回购机制，您可以随时申请退出投资。我们会根据市场情况评估回购价格，确保您的权益得到保障。整个退出流程通常需要1-2周时间。'
    },
    {
      question: '投资风险如何控制？',
      answer: '我们通过多重措施控制投资风险：1）严格的项目筛选和评估；2）完整的法律文件保障；3）专业的运维管理团队；4）多重保险保障；5）透明的运营报告。'
    },
    {
      question: '外国人可以在日本拥有土地吗？',
      answer: '是的，外国人可以在日本合法拥有土地和不动产。我们协助您完成所有法律手续，确保您的所有权得到法律保护。所有投资项目都经过法律审查，确保合规合法。'
    },
    {
      question: '收益如何计算和分配？',
      answer: '收益主要来自电费收入，按照FIT制度固定价格收购。扣除运营成本后，净收益按投资比例分配给投资者。我们提供详细的收益计算表和分配记录，确保透明公正。'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-xl text-gray-600">
            关于投资流程的常见问题解答
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-green" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-green to-primary-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              还有其他问题？
            </h3>
            <p className="text-lg text-green-100 mb-6">
              我们的专业团队随时为您解答投资相关问题
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+81-3-1234-5678"
                className="bg-white text-primary-green px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                电话咨询
              </a>
              <a
                href="mailto:info@sakurasolarcapital.com"
                className="bg-primary-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
              >
                邮件咨询
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessFAQ



