import CarteItems from './CarteItems'

const Carte = () => {
  return (
    <section
      id="menu"
      className="flex h-auto w-full flex-col items-center justify-start p-4"
    >
      <div className="flex w-full flex-col items-center md:w-3/5">
        <h1 className="text-center font-amiko font-bold uppercase text-redMain">
          Cardápio
        </h1>
        <CarteItems />
      </div>
      <button className="mt-4 rounded bg-redMain p-2 hover:bg-[#bb2a2a]">
        Ver mais...
      </button>
    </section>
  )
}

export default Carte
