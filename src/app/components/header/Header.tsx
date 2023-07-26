"use client"
import Image from "next/image";
import Theme from "./Theme";
import { useTheme } from "@/app/context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="flex w-screen flex-row justify-between items-center px-4 h-[10vh] border-b-red-700 border-b-4">
      <div className="w-[125px] h-min">
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
      </div>
      <Theme />
    </header>
  );
};

export default Header;
