import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Menu = () => {
  return (
    <section
      id="menu"
      className="w-full md:min-h-screen h-auto p-4 flex flex-col justify-start items-center border-b-2 border-b-redMain"
    >
      <div className="md:w-3/5 w-full flex flex-col items-center">
        <h1 className="font-amiko font-bold uppercase text-redMain text-4xl text-center">
          Cardápio
        </h1>
        <p className="text-orange font-bold text-center font-inter my-12">
          O cardápio interativo está em desenvolvimento, para ver o cardápio por
          favor entre em nosso perfil do Whatsapp ou Instagram.
        </p>
        <div className="flex flex-col gap-6">
          <button className="p-2 rounded-lg bg-gradient-to-r from-royalBlue via-purple to-purpleRed text-white w-max">
            <a href="https://www.instagram.com/pizzariacapelanova/" className="flex flex-row justify-center items-center gap-2" target="_blank">
              Instagram <BsInstagram />
            </a>
          </button>
          <button className="p-2 rounded-lg dark:bg-tealGreen bg-lightGreen text-white w-max">
            <a href="https://wa.me/553190782786?" className="flex flex-row justify-center items-center gap-2" target="_blank">
              Whatsapp <BsWhatsapp />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
