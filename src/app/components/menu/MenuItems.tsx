"use client";
import { getPizzaMenu } from "@/app/context/MenuPizza";
import React from "react";

const MenuItems: React.FC = () => {
  function priceConverter(price: number) {
    // price converted string & price converted array
    let pcs = price.toFixed(2).toString();
    let pca = pcs.split(".");
    console.log(pca);
    return (
      <span className="flex">
        {pca[0]}, <span className="text-lg">{pca[1]}</span>
      </span>
    );
  }

  const pizzas = getPizzaMenu();
  console.log(pizzas);

  return (
    <ul className="flex flex-col gap-4">
      {pizzas.map((pizza, index) => (
        <li key={index}>
          <div className="flex max-w-[350px] flex-col rounded-xl border p-2 md:min-w-[600px] md:flex-row">
            <div>
              <h2 className="uppercase text-lg">{pizza.sabor}</h2>
              <p className="bg-black text-orange text-base md:text-[1.25rem]">{pizza.ingredients}</p>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-2">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-2xl">Média</h2>
                <p className="w-max md:-translate-y-2 text-sm md:text-base  text-[#ffffffbc]">
                  (6 Fatias)
                </p>
                <div className="flex rounded-xl md:rounded-full bg-redMain p-[4px] md:p-2 text-2xl md:text-3xl">
                  ${priceConverter(pizza.price.md)}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-2xl">Grande</h2>
                <p className="w-max md:-translate-y-2 text-sm md:text-base none text-[#ffffffbc]">
                  (8 Fatias)
                </p>
                <div className="flex rounded-xl md:rounded-full bg-redMain p-[4px] md:p-2 text-2xl md:text-3xl">
                  ${priceConverter(pizza.price.lg)}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

/*

<li key={index}>
                    <div className='min-w-[600px] border p-2 rounded-xl flex'>
                        <div>
                            <h2 className='uppercase'>{pizza.sabor}</h2>
                            <p className='text-orange'>{pizza.ingredients}</p>
                        </div>
                        <div className='flex flex-row justify-evenly items-center gap-2'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Média</h2>
                                <p>(6 Fatias)</p>
                                <span className='text-3xl bg-[#ff0000] p-2 rounded-full'>{pizza.price.md}</span>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Grande</h2>
                                <p>(8 Fatias)</p>
                                <span className='text-3xl bg-[#ff0000] p-2 rounded-full'>{pizza.price.lg}</span>
                            </div>
                        </div>
                    </div>
                </li>

*/
