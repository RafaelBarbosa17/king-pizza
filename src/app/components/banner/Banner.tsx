import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-white bg-no-repeat md:bg-right bg-center md:bg-contain bg-cover dark:bg-black w-full h-[90vh] flex flex-row" style={{backgroundImage: "url('/banner-image.png')"}}>
      {/* elementos de estilisação */}
      <div>
        <Image src={'/banner-detail.png'} width={1000} height={1000} alt="vector" className="absolute h-[90vh] top-[10vh] w-[65vw] z-0 hidden md:dark:block" />
        <Image src={'/banner-detail-light.png'} width={1000} height={1000} alt="vector" className="absolute h-[90vh] top-[10vh] w-[65vw] z-0 hidden md:block dark:hidden" />
        <div className="absolute h-[90vh] top-[10vh] w-[100vw] bg-gradient-to-r dark:from-black from-white dark:via-black via-white via-50% to-transparent z-0 hidden">
        </div>
        <div className="absolute h-[90vh] top-[10vh] w-screen z-0 md:hidden block dark:bg-black bg-white dark:opacity-70 opacity-20">
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
        <h1 className="dark:text-orange-500 text-4xl text-center text-bold font-allura rounded p-1">
          Direto do forno <br /> para sua casa!
        </h1>
        <button className="p-2 rounded bg-red-700 text-white">
          <a href="https://wa.me/553190782786?text=Ol%C3%A1%2C+eu+quero+pizza%21" target="_blank">Pedir agora</a>
        </button>
      </div>

    </section>
  );
};

export default Banner;
