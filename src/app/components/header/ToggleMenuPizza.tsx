import { useState } from "react";
import Nav from "./Nav";
import ThemeButton from "./Theme";

const ToggleMenuPizza = () => {
  const [toggleMenu, setToggleMenu] = useState("Desactived")

  const handleMenu = () => {
    setToggleMenu(toggleMenu === "Desactived" ? "Actived" : "Desactived")
  }
/*
  return (
    <div className="md:hidden flex w-full h-full justify-end items-center">
      <button
        id={"ToggleMenuPizza" + toggleMenu}
        className="flex flex-col w-[8vh] h-[8vh] justify-around items-center p-2 border-white border-2 rounded-full"
        onClick={handleMenu}
      >
        <div id="d-1"></div>
        <div id="d-2"></div>
        <div id="d-3"></div>
      </button>
      <div className="absolute w-[160px] h-[160px] bg-black top-[10vh] z-50">
        <Nav />
      </div>
    </div>
  ); */
  return <ThemeButton />
};

export default ToggleMenuPizza;
