/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // ✅ 启用静态导出
  images: {
    unoptimized: true,  // ✅ 必须加：禁用 Image Optimization，才能导出静态站点
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/og-image.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
