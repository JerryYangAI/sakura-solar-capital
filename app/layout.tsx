import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButton from '../components/FloatingButton'
import BackToTop from '../components/BackToTop'
import StructuredData from '../components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://sakurasolarcapital.com'),
  title: '日本太阳能电站投资 | Sakura太阳能源投资 Sakura Solar Capital – 稳健收益15%',
  description: 'Sakura太阳能源投资（Sakura Solar Capital）专注于日本太阳能电站销售与运营，投资额200-500万人民币，拥有土地与电站产权，年化收益约15%，并提供维护及回购服务，让全球华人共享日本绿色能源收益。',
  keywords: '日本太阳能电站投资,日本光伏投资,日本清洁能源投资,日本土地+太阳能项目,日本可再生能源收益,日本电站买卖,日本太阳能电站回购,海外新能源投资,Sakura太阳能源投资,Sakura Solar Capital,日本太阳能电站多少钱,日本太阳能发电收益,日本电费收益投资项目,日本土地投资安全吗,海外华人如何投资日本太阳能,投资日本电站流程,日本太阳能项目年化收益15%,日本电站维护与代运营',
  authors: [{ name: 'Sakura Solar Capital' }],
  openGraph: {
    title: '日本太阳能电站投资 | Sakura太阳能源投资 Sakura Solar Capital – 稳健收益15%',
    description: 'Sakura太阳能源投资（Sakura Solar Capital）专注于日本太阳能电站销售与运营，投资额200-500万人民币，拥有土地与电站产权，年化收益约15%，并提供维护及回购服务，让全球华人共享日本绿色能源收益。',
    url: 'https://sakurasolarcapital.com',
    siteName: 'Sakura Solar Capital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '日本太阳能电站投资 | Sakura太阳能源投资 Sakura Solar Capital – 稳健收益15%',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '日本太阳能电站投资 | Sakura太阳能源投资 Sakura Solar Capital – 稳健收益15%',
    description: 'Sakura太阳能源投资（Sakura Solar Capital）专注于日本太阳能电站销售与运营，投资额200-500万人民币，拥有土地与电站产权，年化收益约15%，并提供维护及回购服务，让全球华人共享日本绿色能源收益。',
    images: ['/og-image.jpg'],
    creator: '@sakurasolarcapital',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="WebSite" data={{}} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButton />
        <BackToTop />
      </body>
    </html>
  )
}