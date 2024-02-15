'use client'
import { getPizzaMenu } from '@/app/context/MenuPizza'
import React from 'react'

const CarteItems: React.FC = () => {
  function priceConverter(price: number) {
    // price converted string & price converted array
    const pcs = price.toFixed(2).toString()
    const pca = pcs.split('.')
    return (
      <span className="flex text-4xl">
        {pca[0]}, <span className="text-2xl">{pca[1]}</span>
      </span>
    )
  }

  const pizzas = getPizzaMenu()

  return (
    <ul className="flex flex-col gap-4">
      {pizzas.map((pizza, index) => {
        return (
          <li key={index}>
            <div className="flex max-w-[400px] flex-col gap-2 rounded-xl border p-2 md:min-w-[600px] md:flex-row">
              <div>
                <h2 className="text-lg font-bold uppercase">{pizza.sabor}</h2>
                <p className="bg-black text-base text-orange md:text-[1.25rem]">
                  {pizza.ingredients}
                </p>
              </div>
              <div className="flex flex-row items-center justify-evenly gap-2">
                <div className="flex flex-col items-center justify-center rounded-2xl bg-redMain px-4 md:bg-opacity-0">
                  <h2 className="text-xl leading-none md:text-2xl">Média</h2>
                  <p className="hidden w-max text-base text-[#ffffffbc] md:block">
                    (6 Fatias)
                  </p>
                  <div
                    className="flex rounded-xl bg-redMain p-[4px] text-4xl md:rounded-full
                  md:p-2"
                  >
                    ${priceConverter(pizza.price.md)}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl bg-redMain px-4 md:bg-opacity-0">
                  <h2 className="text-xl leading-none md:text-2xl">Grande</h2>
                  <p className="none hidden w-max text-base text-[#ffffffbc] md:block">
                    (8 Fatias)
                  </p>
                  <div className="flex rounded-xl bg-redMain p-[4px] text-4xl md:rounded-full md:p-2">
                    ${priceConverter(pizza.price.lg)}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default CarteItems
