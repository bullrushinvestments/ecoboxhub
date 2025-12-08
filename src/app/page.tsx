import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoBoxHub',
  description: 'EcoBoxHub is a subscription box service that curates climate-friendly products and provides educational content on sustainable living. It serves both conscious consumers and small businesses looking to promote eco-friendly practices.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoBoxHub</h1>
      <p className="mt-4 text-lg">EcoBoxHub is a subscription box service that curates climate-friendly products and provides educational content on sustainable living. It serves both conscious consumers and small businesses looking to promote eco-friendly practices.</p>
    </main>
  )
}
