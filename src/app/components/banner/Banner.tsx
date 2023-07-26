import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-white md:bg-[url('/banner-light.png')] dark:bg-black dark:md:bg-[url('/banner.png')] bg-cover bg-right bg-no-repeat w-full h-[90vh]">
      <div className="md:w-2/4 w-full h-full flex justify-center items-center flex-col">
        <Image
            src='/logo-king-pizza.png'
            width={300}
            height={300}
            alt="favicon"
            className="block"
        />
        <div className="md:hidden hidden min-w-[300px] max-w-[500px] min-h-[300px] bg-[url('/banner-mobile-light.png')] dark:bg-[url('/banner-mobile.png')] bg-cover bg-no-repeat bg-center"></div>
        <h1 className="dark:text-orange-500 text-orange-800 mm:text-5xl text-4xl text-center text-bold font-allura">
          Direto do forno <br /> para sua casa!
        </h1>
      </div>
    </section>
  );
};

export default Banner;
