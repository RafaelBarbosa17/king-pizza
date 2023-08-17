"use client"
import { HiSun, HiMoon } from 'react-icons/hi';
import React, { useEffect } from "react";
import { useTheme } from '@/app/context/ThemeContext';

const ThemeButton = () => {
  // Usando o hook useTheme para acessar o contexto de tema
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(theme)
  })

  return (
      <button
        onClick={() => {
          changeTheme()
        }}
        className="w-20 h-10 p-2 rounded-full flex items-center dark:bg-black dark:shadow-[inset_0px_2px_5px_0px_white] bg-white shadow-[inset_0px_2px_5px_0px_black] transition-all"
      >
        <div className="dark:translate-x-0 translate-x-full trnasition-all ease-linear duration-100">
              <HiMoon className='w-8 h-8 fill-orange dark:block hidden' />
              <HiSun className='w-8 h-8 fill-orange dark:hidden' />
        </div>
      </button>
  );
};

export default ThemeButton;
