const ContactHero = () => {
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
            联系
            <span className="block gold-gradient bg-clip-text text-transparent">
              我们
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            我们的专业团队随时为您提供投资咨询服务，
            让您的投资之旅更加顺利。
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactHero



