import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoFinBox',
  description: 'EcoFinBox provides personalized climate-friendly subscription boxes tailored to users' financial health and environmental impact goals. By combining the benefits of personal finance management with sustainable living, we empower individuals to make informed choices that benefit both their wallets and the planet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
