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
        className="w-16 h-8 p-2 px-1 rounded-full flex items-center border-redMain border-2 bg-[#44414cf7] transition-all"
      >
        <div className="dark:translate-x-0 translate-x-full trnasition-all ease-linear duration-100">
          <div className='rounded-full text-redMain bg-black w-[24px] h-[24px] text-[8px] flex items-center justify-center'>OFF</div>
        </div>
      </button>
  );
};

export default ThemeButton;
