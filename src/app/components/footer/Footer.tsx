import { BsInstagram, BsWhatsapp, BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-gray">
      <div className="p-2 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-redMain font-bold font-amiko">
          Contate-nos
        </h2>
        <div className="flex md:flex-row flex-col gap-4 w-max">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-center text-1xl font-inter uppercase">
              Nossas Redes Sociais
            </h3>
            <div className="flex flex-grow gap-2">
              <button className="p-2 rounded-lg bg-gradient-to-r from-royalBlue via-purple to-purpleRed text-white w-max">
                <a
                  href="https://www.instagram.com/pizzariacapelanova/"
                  className="flex flex-row justify-center items-center gap-2"
                  target="_blank"
                >
                  Instagram <BsInstagram />
                </a>
              </button>
              <button className="p-2 rounded-lg dark:bg-tealGreen bg-lightGreen text-white w-max">
                <a
                  href="https://wa.me/553190782786?"
                  className="flex flex-row justify-center items-center gap-2"
                  target="_blank"
                >
                  Whatsapp <BsWhatsapp />
                </a>
              </button>
            </div>
          </div>
          <div>
              <h3 className="text-white text-center text-1xl font-inter uppercase">
                Nosso Telefone
              </h3>
              <div className="flex flex-grow gap-2">
                <p className="text-black bg-white rounded-xl p-2">
                    +55 &#40;31&#41; 99078-2786
                </p>
                <button className="p-2 rounded-lg bg-redMain text-white w-max">
                  <a
                    href="tel:+553199078-2786"
                    className="flex flex-row justify-center items-center gap-2"
                    target="_blank"
                  >
                    Ligar <BsTelephone />
                  </a>
                </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
