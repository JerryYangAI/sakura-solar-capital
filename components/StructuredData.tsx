interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'FAQPage' | 'Product'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sakura Solar Capital",
          "alternateName": "Sakura太阳能源投资",
          "url": "https://sakurasolarcapital.com",
          "logo": "https://sakurasolarcapital.com/logo.svg",
          "description": "专注于日本太阳能电站投资的专业公司，为全球华人提供安全、稳定、高收益的绿色能源投资机会",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "JP",
            "addressLocality": "大阪府大阪市阿倍野区"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+81-3-1234-5678",
            "contactType": "customer service",
            "email": "info@sakurasolarcapital.com"
          },
          "sameAs": [
            "https://sakurasolarcapital.com"
          ]
        }
      
      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Sakura Solar Capital",
          "url": "https://sakurasolarcapital.com",
          "description": "日本太阳能电站投资平台",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sakurasolarcapital.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.excerpt,
          "author": {
            "@type": "Organization",
            "name": "Sakura Solar Capital"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sakura Solar Capital",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sakurasolarcapital.com/logo.svg"
            }
          },
          "datePublished": data.date,
          "dateModified": data.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://sakurasolarcapital.com/blog/${data.slug}`
          }
        }
      
      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      
      case 'Product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name,
          "description": data.description,
          "category": "太阳能电站投资",
          "brand": {
            "@type": "Brand",
            "name": "Sakura Solar Capital"
          },
          "offers": {
            "@type": "Offer",
            "price": data.investment,
            "priceCurrency": "CNY",
            "availability": data.status === 'available' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
          }
        }
      
      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  )
}
