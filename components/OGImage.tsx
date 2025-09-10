const OGImage = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-green-800 to-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/og-image.jpg" 
          alt="Sakura太阳能源投资 - 日本太阳能电站投资" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/logo.svg" 
            alt="Sakura Solar Capital Logo" 
            className="h-20 w-auto mx-auto"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sakura太阳能源投资
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-gold">
          Sakura Solar Capital
        </h2>
        
        {/* Key Points */}
        <div className="text-lg md:text-xl space-y-2 mb-6">
          <p>日本太阳能电站・年化收益15%・土地+电站产权</p>
        </div>
        
        {/* Website URL */}
        <p className="text-lg font-mono">
          sakurasolarcapital.com
        </p>
      </div>
    </div>
  )
}

export default OGImage
