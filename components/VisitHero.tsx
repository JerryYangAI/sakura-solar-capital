const VisitHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-gold to-primary-green text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            日本
            <span className="block text-white">
              考察服务
            </span>
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            我们为您提供免费的日本考察服务，包括接机、住宿、餐饮和实地参观，
            让您深入了解太阳能电站投资机会。
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisitHero



