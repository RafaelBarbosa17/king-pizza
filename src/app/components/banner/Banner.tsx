import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-row h-[90vh]">
      {/* elementos de estilisação */}
      <div>
        <div className="z-0 absolute right-0 bg-no-repeat md:bg-right bg-center bg-cover dark:bg-black md:w-2/4 w-full h-[90vh] border-y-redMain border-y-2" style={{backgroundImage: "url('/banner-image.png')"}}></div>

        <Image src={'/banner-detail.png'} width={1000} height={1000} alt="vector" className="absolute h-[90vh] top-[10vh] w-[68vw] z-0 hidden md:dark:block" />

        <Image src={'/banner-detail-light.png'} width={1000} height={1000} alt="vector" className="absolute h-[90vh] top-[10vh] w-[68vw] z-0 hidden md:block dark:hidden" />

        <div className="absolute h-[90vh] top-[10vh] w-full z-0 md:hidden block dark:bg-black bg-white dark:opacity-70 opacity-20">
        </div>
      </div>


      <div className="md:w-2/4 w-full h-full pt-2 flex md:justify-start items-center gap-4 flex-col z-10">
        <Image
          src="/logo-king-pizza.png"
          width={500}
          height={500}
          alt="favicon"
          className="block max-w-[300px]"
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
