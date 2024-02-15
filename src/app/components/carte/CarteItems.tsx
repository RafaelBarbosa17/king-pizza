'use client'
import { getPizzaMenu } from '@/app/context/MenuPizza'
import React from 'react'

const CarteItems: React.FC = () => {
  function priceConverter(price: number) {
    // price converted string & price converted array
    let pcs = price.toFixed(2).toString()
    let pca = pcs.split('.')
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
            <div className="flex max-w-[400px] flex-col rounded-xl border p-2 md:min-w-[600px] md:flex-row gap-2">
              <div>
                <h2 className="uppercase text-lg font-bold">{pizza.sabor}</h2>
                <p className="bg-black text-orange text-base md:text-[1.25rem]">
                  {pizza.ingredients}
                </p>
              </div>
              <div className="flex flex-row items-center justify-evenly gap-2">
                <div className="flex flex-col items-center justify-center md:bg-opacity-0 bg-redMain px-4 rounded-2xl">
                  <h2 className="text-xl md:text-2xl leading-none">Média</h2>
                  <p className="w-max text-base md:block hidden text-[#ffffffbc]">
                    (6 Fatias)
                  </p>
                  <div
                    className="flex rounded-xl md:rounded-full bg-redMain p-[4px] md:p-2
                  text-4xl"
                  >
                    ${priceConverter(pizza.price.md)}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center md:bg-opacity-0 bg-redMain px-4 rounded-2xl">
                  <h2 className="text-xl md:text-2xl leading-none">Grande</h2>
                  <p className="w-max text-base md:block hidden none text-[#ffffffbc]">
                    (8 Fatias)
                  </p>
                  <div className="flex rounded-xl md:rounded-full bg-redMain p-[4px] md:p-2 text-4xl">
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
