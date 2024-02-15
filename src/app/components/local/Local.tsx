'use client'

import GoogleMap from './GoogleMap'
import CopyToClipBoard from './CopyToClipBoard'

const Local = () => {
  return (
    <section id="local" className="flex w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-4 md:w-2/4 md:p-16">
        <h1 className="text-center font-amiko font-bold uppercase text-redMain">
          Onde estamos?
        </h1>
        <CopyToClipBoard text="Praça João Pereira, 80B - Centro, Capela Nova - MG, 36290-000" />
        <div className="block h-[400px] w-full md:hidden">
          <GoogleMap />
        </div>
        <p className="text-center font-amiko font-bold">
          Desfrute da perfeição e dos sabores irresistíveis das nossas pizzas
          artesanais. Venha nos visitar para uma experiência gastronômica única
          ou peça agora e traga a magia da pizzaria direto para o conforto da
          sua casa. Sua jornada pelo sabor começa aqui.
        </p>
      </div>
      <div className="hidden w-2/4 md:block">
        <GoogleMap />
      </div>
    </section>
  )
}

export default Local
