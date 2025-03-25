import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Affulexis Enterprise',
  description: 'Professional construction services in Ghana',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  themeColor: '#16a34a',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: 'construction, Ghana, building, infrastructure, road construction, industrial projects',
  author: 'Affulexis Enterprise',
  openGraph: {
    title: 'Affulexis Enterprise | Excellence in Construction',
    description: 'Professional construction services in Ghana',
    url: 'https://affulexis.com',
    siteName: 'Affulexis Enterprise',
    images: [
      {
        url: '/images/const_img2.jpg',
        width: 1200,
        height: 630,
        alt: 'Affulexis Enterprise Construction',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 