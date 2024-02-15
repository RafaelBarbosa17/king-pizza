import { BsInstagram, BsWhatsapp, BsTelephone } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="h-auto w-full bg-gray">
      <div className="flex flex-col items-center justify-center p-2">
        <h2 className="font-amiko text-2xl font-bold text-redMain">
          Contate-nos
        </h2>
        <div className="flex w-max flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="text-1xl text-center font-inter uppercase text-white">
              Nossas Redes Sociais
            </h3>
            <div className="flex flex-grow gap-2">
              <button className="w-max rounded-lg bg-gradient-to-r from-royalBlue via-purple to-purpleRed p-2 text-white">
                <a
                  href="https://www.instagram.com/pizzariacapelanova/"
                  className="flex flex-row items-center justify-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram <BsInstagram />
                </a>
              </button>
              <button className="w-max rounded-lg bg-lightGreen p-2 text-white dark:bg-tealGreen">
                <a
                  href="https://wa.me/553190782786?"
                  className="flex flex-row items-center justify-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Whatsapp <BsWhatsapp />
                </a>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-center font-inter text-base uppercase text-white">
              Nosso Telefone
            </h3>
            <div className="flex flex-grow gap-2">
              <p className="rounded-xl bg-white p-2 text-black">
                +55 &#40;31&#41; 99078-2786
              </p>
              <button className="w-max rounded-lg bg-redMain p-2 text-white">
                <a
                  href="tel:+553199078-2786"
                  className="flex flex-row items-center justify-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ligar <BsTelephone />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
