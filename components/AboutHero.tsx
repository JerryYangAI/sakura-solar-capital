const AboutHero = () => {
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
          {/* Logo */}
          <div className="flex justify-center mb-8">
              <img 
                src="/logo.svg" 
                alt="Sakura Solar Capital Logo" 
                className="h-24 w-auto"
              />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            关于
            <span className="block gold-gradient bg-clip-text text-transparent">
              Sakura太阳能源投资
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们是一家专注于日本太阳能电站投资的专业公司，
            致力于为全球华人提供安全、稳定、高收益的绿色能源投资机会。
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
