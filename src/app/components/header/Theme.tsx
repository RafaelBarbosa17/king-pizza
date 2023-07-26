"use client"
import { HiSun, HiMoon } from 'react-icons/hi';
import React, { ComponentProps, useEffect, useState } from "react";
import { useTheme } from '@/app/context/ThemeContext';

const Theme = () => {
  const [themeValue, setThemeValue] = useState(true)
  // Usando o hook useTheme para acessar o contexto de tema
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(theme)
  })

  return (
      <button 
        data-success={themeValue}
        onClick={() => {
          changeTheme()
          theme === 'dark' ? setThemeValue(true) : setThemeValue(false)
        }}
        className={`w-20 h-10 p-2 rounded-full flex items-center ${themeValue ? 'justify-end bg-white shadow-[inset_0px_2px_5px_0px_black]' : 'justify-start bg-black shadow-[inset_0px_2px_5px_0px_white]'} transition-all`}
      >
        {
            theme === 'dark'
            ? <HiMoon className='w-8 h-8 fill-orange-500' />
            : <HiSun className='w-8 h-8 fill-orange-500' />
        }
      </button>
  );
};

export default Theme;
