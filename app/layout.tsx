import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoPlate - CMPT-362 Final Project',
  description: 'A university project demonstrating how mobile apps can help reduce food waste by connecting consumers with surplus food from local stores.',
  keywords: 'food waste, sustainability, eco-friendly, university project, CMPT-362, mobile app, Android',
  authors: [{ name: 'CMPT-362 Student' }],
  openGraph: {
    title: 'EcoPlate - CMPT-362 Final Project',
    description: 'A university project demonstrating how mobile apps can help reduce food waste by connecting consumers with surplus food from local stores.',
    images: ['/hero-mockup.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoPlate - CMPT-362 Final Project',
    description: 'A university project demonstrating how mobile apps can help reduce food waste by connecting consumers with surplus food from local stores.',
    images: ['/hero-mockup.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
