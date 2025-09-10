import FAQHero from '../../components/FAQHero'
import FAQList from '../../components/FAQList'
import FAQContact from '../../components/FAQContact'
import StructuredData from '../../components/StructuredData'

const faqData = {
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
    }
  ]
}

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <StructuredData type="FAQPage" data={faqData} />
      <FAQHero />
      <FAQList />
      <FAQContact />
    </div>
  )
}
