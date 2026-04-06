import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'メンズヘアLab',
  description: 'メンズヘア・髪型情報メディア',
  openGraph: { title: 'メンズヘアLab', description: 'メンズヘア・髪型情報メディア', type: 'website', locale: 'ja_JP', siteName: 'メンズヘアLab' },
  twitter: { card: 'summary_large_image', title: 'メンズヘアLab', description: 'メンズヘア・髪型情報メディア' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="xpdiFRYHloMJxfhCT-IMD08p5na4v9WUqvPY9OrDsHs" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "メンズヘアLab", "description": "メンズヘア・髪型情報メディア", "url": "https://mens-hair-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}