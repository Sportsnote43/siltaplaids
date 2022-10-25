import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative mb-8 pt-2 pb-24 sm:py-12">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-white">
        <Image
          className="top-0 left-auto right-auto"
          src= {backgroundImage}
          width={3840}
          alt="Living"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-1xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-silta-gray-800 drop-shadow-2xl sm:text-4xl">
            <span className="sr-only">Silta plaids </span>De originele dons plaid
          </h1>
          <div className="mt-6 mb-12 space-y-6 font-display text-2xl tracking-tight text-silta-gray">
            <p>
            Silta plaids zijn van hoge kwaliteit en van gerecycled dons gemaakt.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
