import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoFinBox',
  description: 'EcoFinBox provides personalized climate-friendly subscription boxes tailored to users' financial health and environmental impact goals. By combining the benefits of personal finance management with sustainable living, we empower individuals to make informed choices that benefit both their wallets and the planet.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoFinBox</h1>
      <p className="mt-4 text-lg">EcoFinBox provides personalized climate-friendly subscription boxes tailored to users' financial health and environmental impact goals. By combining the benefits of personal finance management with sustainable living, we empower individuals to make informed choices that benefit both their wallets and the planet.</p>
    </main>
  )
}
