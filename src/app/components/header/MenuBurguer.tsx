"use-client"
import { useState } from "react"
import ThemeButton from "./Theme";

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
            <div id={"card-burguer-" + active} className="absolute dark:bg-black bg-white right-0 top-[9.9vh] md:w-[250px] w-full h-[300px] z-20 p-4 rounded">
                <span className="flex justify-between items-center dark:text-white max-w-[250px]">
                    Modo light: <ThemeButton />
                </span>
            </div>
        </div>
    )
}

export default MenuBurguer;