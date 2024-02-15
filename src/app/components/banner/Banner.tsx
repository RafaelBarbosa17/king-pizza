import Image from 'next/image'

const Banner = () => {
  return (
    <section
      className="flex min-h-[90vh] flex-col items-center justify-around bg-cover py-4 md:flex-row"
      style={{ backgroundImage: "url('/banner-image.png')" }}
    >
      <div className="absolute top-[70px] z-[1] block h-full w-full bg-white opacity-20 dark:bg-black dark:opacity-70"></div>

      <div className="flex max-w-[500px] flex-col justify-center gap-4 px-4 pt-2 md:w-2/4 md:max-w-none">
        <h1 className="font-inter text-2xl font-bold uppercase leading-none text-white md:text-[36px]">
          Está com <span className="text-orange">fome?</span>
          <br />
          <span className="font-inter text-3xl font-bold uppercase text-orange md:text-[48px]">
            <span className="text-white">A gente </span>resolve!
          </span>
        </h1>
        <p className="hidden font-bold md:block">
          Prático, rápido, simples e econômico - nossa pizza é tudo isso e muito
          mais. Além de ser deliciosa e chegar quentinha até você, proporciona
          uma experiência gastronômica única, capaz de transformar seu jantar em
          família ou romântico em uma memória inesquecível. Não deixe escapar
          essa oportunidade, faça seu pedido agora e saboreie momentos especiais
          com quem você ama!
        </p>
        <p className="block font-bold md:hidden">
          Prático, rápido, simples e econômico - chega quentinha até você e
          proporciona uma experiência gastronômica única. Faça seu pedido agora
          e saboreie momentos especiais com quem você ama!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-2xl p-4 md:bg-black md:bg-opacity-30 md:shadow-[10px_10px_10px_0px_#000000b0] md:backdrop-blur-[6px]">
          <Image
            src="/logo-king-pizza.png"
            width={300}
            height={300}
            alt="favicon"
            className="block max-w-[250px]"
          />
          <h1 className="rounded p-1 text-center font-courgette text-4xl font-bold dark:text-redMain">
            Direto do forno <br /> para sua casa!
          </h1>
        </div>
        {/* <button className="p-2 rounded bg-redMain text-white">
          <a href="https://wa.me/553190782786?text=Ol%C3%A1%2C+eu+quero+pizza%21" target="_blank">Pedir agora</a>
        </button> */}
      </div>
    </section>
  )
}

export default Banner
