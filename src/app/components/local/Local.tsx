"use client"

import GoogleMap from "./GoogleMap";
import CopyToClipBoard from "./CopyToClipBoard";

const Local = () => {
  return (
    <section
      id="local"
      className="w-full flex"
    >
      <div className="md:w-2/4 w-full h-full md:p-16 p-4 flex flex-col justify-center items-center gap-8">
        <h1 className="text-redMain text-center uppercase font-amiko font-bold">
          Onde estamos?
        </h1>
        <CopyToClipBoard text="Praça João Pereira, 80B - Centro, Capela Nova - MG, 36290-000" />
        <div className="md:hidden block w-full h-[400px]">
          <GoogleMap />
        </div>
        <p className="text-center font-amiko font-bold">
          Desfrute da perfeição e dos sabores irresistíveis das nossas pizzas
          artesanais. Venha nos visitar para uma experiência gastronômica única
          ou peça agora e traga a magia da pizzaria direto para o conforto da
          sua casa. Sua jornada pelo sabor começa aqui.
        </p>
      </div>
      <div className="md:block hidden w-2/4">
        <GoogleMap />
      </div>
    </section>
  );
};

export default Local;
