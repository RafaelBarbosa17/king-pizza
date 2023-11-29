"use client"
import Image from "next/image";
import Nav from "./Nav";
import MenuBurguer from "./MenuBurguer";
import { useTheme } from "@/app/context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="flex w-full flex-row justify-between items-center px-4 h-[10vh] z-100">
      <a href="/" className="w-[125px] h-min cursor-pointer">
        {theme === "dark" ? (
          <Image
            src="/logo/logo-red-white.png"
            width={1000}
            height={1000}
            alt="logo-principal"
            className="w-full h-full"
          />
        ) : (
          <Image
            src="/logo/logo-red-black.png"
            width={1000}
            height={1000}
            alt="logo-principal"
            className="w-full h-full"
          />
        )}
      </a>
      <Nav />
      <MenuBurguer />
    </header>
  );
};

export default Header;
