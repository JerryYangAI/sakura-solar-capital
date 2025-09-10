const ProcessHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-blue to-primary-green text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-gold rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary-gold rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            投资
            <span className="block gold-gradient bg-clip-text text-transparent">
              流程指南
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            从咨询到收益，我们为您提供全程专业指导，
            让您的投资过程简单、安全、高效。
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcessHero



