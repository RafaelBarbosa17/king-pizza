'use-client'
import { useState } from 'react'
import ThemeButton from './Theme'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const MenuBurguer = () => {
  const [active, setActive] = useState('')
  const changeMenu = () => {
    setActive(
      active == '' ? 'active' : active == 'active' ? 'desactive' : 'active'
    )
  }

  return (
    <div className="z-30">
      <div
        id={'burguer-menu-box-' + active}
        onClick={changeMenu}
        className="z-10 hover:cursor-pointer"
      >
        <div id="bmi-1" className="bg-black dark:bg-white"></div>
        <div id="bmi-2" className="bg-black dark:bg-white"></div>
        <div id="bmi-3" className="bg-black dark:bg-white"></div>
      </div>
      <div
        id={'card-nav-' + active}
        className="absolute right-0 top-[70px] z-[10] h-[100%] w-full bg-white p-4 px-12 dark:bg-black md:w-2/4"
      >
        <ul>
          <li>
            <div className="flex max-w-[250px] items-center justify-between">
              Modo light: <ThemeButton />
            </div>
          </li>
        </ul>
        <h2 className="text-center font-bold text-redMain">Redes Sociais</h2>
        <hr className="bg-redMain" />
        <ul className="flex flex-col items-center justify-center gap-4 p-4">
          <li>
            <div>
              <a
                href="https://www.instagram.com/pizzariacapelanova/"
                className="flex w-[165px] items-center justify-around gap-4 rounded-lg bg-gradient-to-tr from-royalBlue via-purple to-purpleRed p-2 uppercase  text-white hover:bg-gradient-to-bl"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <FaInstagram fill="white" size={25} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://wa.me/5531990782786?text="
                className="flex w-[165px] items-center justify-around gap-4 rounded-lg bg-lightGreen p-2 uppercase text-white"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp <FaWhatsapp fill="white" size={25} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuBurguer
