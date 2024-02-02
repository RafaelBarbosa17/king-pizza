"use-client"
import { useState } from "react"
import ThemeButton from "./Theme";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const MenuBurguer = () => {
    const [active, setActive] = useState("");
    const changeMenu = () => {
        setActive(
            active=="" ? "active" 
            : (
                active=="active" ? "desactive" 
                : "active"
                )
            )
    }

    return (
        <div>
            <div 
                id={"burguer-menu-box-" + active}
                onClick={changeMenu}
                className="z-10 hover:cursor-pointer"
            >
                <div id="bmi-1" className="dark:bg-white bg-black"></div>
                <div id="bmi-2" className="dark:bg-white bg-black"></div>
                <div id="bmi-3" className="dark:bg-white bg-black"></div>
            </div>
            <div id={"card-nav-" + active} className="absolute dark:bg-black bg-white right-0 top-[9.10vh] md:w-[50%] w-full h-[100%] z-20 p-4 px-12">
                <ul>
                    <li>
                        <div className="flex justify-between items-center max-w-[250px]">
                                Modo light: <ThemeButton />
                        </div>
                    </li>
                </ul>
                <h2 className="text-redMain text-center font-bold">Redes Sociais</h2>
                <hr className="bg-redMain" />
                <ul className="flex flex-col justify-center items-center p-4 gap-4">
                    <li>
                        <div>
                            <a href="https://www.instagram.com/pizzariacapelanova/" className="flex items-center w-[165px] p-2 gap-4 justify-around uppercase rounded-lg bg-gradient-to-tr from-royalBlue via-purple to-purpleRed  hover:bg-gradient-to-bl text-white" target="_blank" >Instagram <FaInstagram fill="white" size={25} /></a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://wa.me/5531990782786?text=" className="flex items-center w-[165px] p-2 gap-4 justify-around uppercase rounded-lg bg-lightGreen text-white" target="_blank" >Whatsapp <FaWhatsapp fill="white" size={25} /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBurguer;