import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-row h-[90vh] bg-cover" style={{ backgroundImage: "url('/banner-image.png')" }}>
      <div className="absolute h-[90vh] top-[10vh] w-full z-0 md:hidden block dark:bg-black bg-white dark:opacity-70 opacity-20">
      </div>

      <div className="md:w-2/4 w-full h-full pt-2 flex justify-center items-center gap-4 flex-col md:bg-[#00000078] md:backdrop-blur-md z-0">
        <h1 className="text-white text-2xl font-inter font-bold uppercase text-center">
          Está com fome?
          <br />
          <span className="text-orange text-3xl font-inter font-bold uppercase">
            A gente resolve
          </span>
        </h1>
        <Image
          src="/logo-king-pizza.png"
          width={300}
          height={300}
          alt="favicon"
          className="block max-w-[250px]"
        />
        <h1 className="dark:text-orange text-4xl text-center text-bold font-courgette rounded p-1">
          Direto do forno <br /> para sua casa!
        </h1>
        <button className="p-2 rounded bg-redMain text-white">
          <a href="https://wa.me/553190782786?text=Ol%C3%A1%2C+eu+quero+pizza%21" target="_blank">Pedir agora</a>
        </button>
      </div>

    </section>
  );
};

export default Banner;
