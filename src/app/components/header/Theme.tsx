"use client"
import { HiSun, HiMoon } from 'react-icons/hi';
import React, { ComponentProps, useEffect, useState } from "react";
import { useTheme } from '@/app/context/ThemeContext';

const Theme = () => {
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
        className={`w-20 h-10 p-2 rounded-full flex items-center ${theme === 'dark' ? ' bg-black shadow-[inset_0px_2px_5px_0px_white]' : ' bg-white shadow-[inset_0px_2px_5px_0px_black]'} transition-all`}
      >
        <div className={`${theme === 'dark' ? '' : 'translate-x-full'} trnasition-all ease-linear duration-100`}>
          {
              theme === 'dark'
              ? <HiMoon className='w-8 h-8 fill-orange-500' />
              : <HiSun className='w-8 h-8 fill-orange-500' />
          }
        </div>
      </button>
  );
};

export default Theme;
