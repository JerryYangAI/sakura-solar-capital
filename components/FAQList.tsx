'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const faqCategories = [
    {
      category: '投资基础',
      faqs: [
        {
          question: '什么是日本太阳能电站投资？',
          answer: '日本太阳能电站投资是指投资者购买日本境内的太阳能发电站，通过发电获得电费收益的投资方式。投资者拥有电站的土地所有权、设备所有权和电费收益权，享受稳定的投资回报。'
        },
        {
          question: '日本太阳能电站多少钱？投资需要多少资金？',
          answer: '我们的日本光伏投资项目价格范围在200-500万人民币之间。具体价格根据电站规模、地理位置、发电量等因素确定。我们提供灵活的投资方案，可以根据您的预算推荐合适的日本太阳能电站项目。'
        },
        {
          question: '日本太阳能项目年化收益15%是否真实？投资回报率如何？',
          answer: '是的，我们的日本太阳能项目年化收益15%是真实可实现的。这个收益率主要来自日本政府FIT制度下的固定电价收购，收益稳定可预期。扣除运营成本后，净收益率通常在12-18%之间。'
        },
        {
          question: '投资期限是多长？',
          answer: '日本太阳能电站的投资期限通常为20年，这是日本FIT制度规定的固定电价收购期。20年后，电站仍可继续运营发电，但电价可能会有所调整。'
        }
      ]
    },
    {
      category: '海外华人投资',
      faqs: [
        {
          question: '海外华人如何投资日本太阳能？',
          answer: '海外华人可以通过我们投资日本太阳能电站。我们提供全程中文服务，包括项目介绍、法律手续办理、资金转账等。投资流程简单，我们协助您完成所有必要手续。'
        },
        {
          question: '日本土地投资安全吗？',
          answer: '日本土地投资是安全的，外国人可以在日本合法拥有土地和不动产。我们协助您完成所有法律手续，确保您的所有权得到法律保护。所有投资项目都经过法律审查，确保合规合法。'
        },
        {
          question: '投资日本电站流程是什么？',
          answer: '投资日本电站流程包括：1）项目选择；2）实地考察；3）合同签署；4）资金投入；5）运营管理；6）收益分成。我们提供全程专业指导，确保投资过程顺利。'
        }
      ]
    },
    {
      category: '法律合规',
      faqs: [
        {
          question: '外国人可以在日本拥有土地吗？',
          answer: '是的，外国人可以在日本合法拥有土地和不动产。日本法律允许外国人在日本购买土地和房产，包括用于商业用途的土地。我们协助您完成所有法律手续，确保您的所有权得到法律保护。'
        },
        {
          question: '投资是否合法合规？',
          answer: '我们的所有投资项目都严格符合日本法律法规。我们拥有专业的法律团队，确保每个项目都经过法律审查，所有合同和文件都符合日本法律要求，为投资者提供完整的法律保障。'
        },
        {
          question: '需要什么法律文件？',
          answer: '投资需要的主要法律文件包括：土地买卖合同、设备买卖合同、电费收益权转让合同、运维管理合同等。我们提供完整的中文翻译版本，并协助您理解所有条款内容。'
        },
        {
          question: '如何保障投资者权益？',
          answer: '我们通过多重措施保障投资者权益：1）完整的法律文件；2）专业的法律团队；3）多重保险保障；4）透明的运营报告；5）灵活的回购机制。所有措施都经过法律审查，确保投资者权益得到充分保护。'
        }
      ]
    },
    {
      category: '运营管理',
      faqs: [
        {
          question: '电站如何运营管理？',
          answer: '我们提供专业的电站运营管理服务，包括：24小时监控电站运行状态、定期维护和故障处理、优化发电效率、提供详细的运营报告。我们的专业团队确保电站稳定高效运行，最大化您的投资收益。'
        },
        {
          question: '如何获得收益？',
          answer: '投资收益主要来自电费收入。日本政府通过FIT制度以固定价格收购太阳能发电，收益每月自动到账。我们提供详细的收益报告，包括发电量、电费收入、运营成本等明细，确保收益透明。'
        },
        {
          question: '运营成本如何计算？',
          answer: '运营成本主要包括：设备维护费、土地租金、保险费用、管理费用等。我们提供透明的成本核算，所有费用都有详细记录。通常运营成本占电费收入的5-10%，剩余部分为投资者净收益。'
        },
        {
          question: '如何监控电站运行？',
          answer: '我们提供24小时实时监控系统，可以随时查看电站运行状态、发电量、收益等数据。投资者可以通过我们的在线平台查看实时数据和历史报告，确保对投资情况有全面了解。'
        }
      ]
    },
    {
      category: '风险控制',
      faqs: [
        {
          question: '投资风险有哪些？',
          answer: '主要风险包括：政策风险（FIT制度变化）、自然灾害风险、设备故障风险、汇率风险等。我们通过严格的项目筛选、多重保险保障、专业运维管理等措施，最大程度降低投资风险。'
        },
        {
          question: '如何控制投资风险？',
          answer: '我们通过多重措施控制风险：1）严格的项目筛选和评估；2）多重保险保障（设备险、自然灾害险等）；3）专业的运维管理；4）分散投资策略；5）透明的风险披露。所有风险控制措施都经过专业评估。'
        },
        {
          question: '如果电站出现故障怎么办？',
          answer: '我们提供完善的故障处理机制：1）24小时监控系统及时发现故障；2）专业维修团队快速响应；3）备用设备保障；4）保险理赔处理；5）损失补偿机制。确保故障对收益的影响最小化。'
        },
        {
          question: '如何应对政策变化？',
          answer: '我们密切关注日本能源政策变化，提前制定应对策略。对于已投资项目，我们通过法律文件确保20年固定电价收购的稳定性。对于新政策影响，我们会及时调整投资策略，确保投资者利益。'
        }
      ]
    },
    {
      category: '退出机制',
      faqs: [
        {
          question: '如何退出投资？',
          answer: '我们提供灵活的回购机制，您可以随时申请退出投资。退出流程包括：1）提交退出申请；2）评估回购价格；3）签署回购协议；4）完成资金转账。整个流程通常需要1-2周时间。'
        },
        {
          question: '回购价格如何确定？',
          answer: '回购价格根据以下因素确定：1）电站当前市场价值；2）剩余运营年限；3）历史收益表现；4）设备状况；5）市场行情。我们提供公平合理的回购价格，确保投资者权益。'
        },
        {
          question: '退出需要什么手续？',
          answer: '退出手续包括：1）签署回购协议；2）办理所有权转移；3）结算收益分配；4）完成资金转账；5）注销相关登记。我们协助您完成所有手续，确保退出过程顺利。'
        },
        {
          question: '退出后还能重新投资吗？',
          answer: '当然可以。我们欢迎投资者在退出后重新投资。我们会根据您的投资偏好和预算，推荐新的投资项目。老客户还可以享受优先投资权和优惠价格。'
        }
      ]
    },
    {
      category: '投资知识',
      faqs: [
        {
          question: '日本FIT制度是什么？',
          answer: 'FIT（Feed-in Tariff）制度是日本政府推出的固定价格收购制度，以固定价格收购可再生能源发电。对于太阳能发电，政府保证20年固定电价收购，确保投资者获得稳定收益。这是日本太阳能投资的核心保障。'
        },
        {
          question: '如何计算太阳能电站投资回报？',
          answer: '投资回报计算包括：1）年发电量×FIT电价=年电费收入；2）扣除运营成本（5-10%）；3）净收益÷投资成本=年化收益率。我们提供详细的计算工具和案例，帮助您准确评估投资回报。'
        },
        {
          question: '日本太阳能电站的发电效率如何？',
          answer: '日本太阳能电站发电效率较高，年发电小时数通常在1000-1200小时。发电效率受地理位置、天气条件、设备质量等因素影响。我们选择的项目都经过专业评估，确保发电效率达到行业标准。'
        },
        {
          question: '投资日本太阳能需要了解哪些政策？',
          answer: '主要政策包括：1）FIT制度（固定电价收购）；2）土地法（外国人土地所有权）；3）税法（投资收益税务处理）；4）环保法（环境影响评估）。我们提供政策解读和合规指导，确保投资符合所有法规要求。'
        },
        {
          question: '如何选择优质的太阳能电站项目？',
          answer: '优质项目标准包括：1）地理位置优越（阳光充足）；2）土地权属清晰；3）设备质量可靠；4）电网接入便利；5）政策支持稳定。我们严格筛选项目，只推荐符合所有标准的优质项目。'
        },
        {
          question: '日本太阳能投资的市场前景如何？',
          answer: '日本太阳能市场前景良好：1）政府大力支持可再生能源；2）FIT制度稳定运行；3）技术不断进步；4）成本持续下降；5）环保意识增强。预计未来10年日本太阳能市场将保持稳定增长。'
        }
      ]
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索问题..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </span>
                        {openIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-primary-green" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              未找到相关问题
            </h3>
            <p className="text-gray-600">
              请尝试使用其他关键词搜索，或直接联系我们获取帮助
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default FAQList
