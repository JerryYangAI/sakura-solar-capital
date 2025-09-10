const FAQHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-gold rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary-gold rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            常见问答
            <span className="block gold-gradient bg-clip-text text-transparent">
              & 投资知识
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们整理了投资者最关心的问题和投资知识，为您提供详细的解答和专业指导。
            如果您还有其他疑问，请随时联系我们。
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQHero

