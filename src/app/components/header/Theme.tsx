'use client'
import React, { useEffect } from 'react'
import { useTheme } from '@/app/context/ThemeContext'

const ThemeButton = () => {
  // Usando o hook useTheme para acessar o contexto de tema
  const { theme, changeTheme } = useTheme()

  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.classList.remove('dark', 'light')
    htmlElement.classList.add(theme)
  })

  return (
    <button
      onClick={() => {
        changeTheme()
      }}
      className="flex h-8 w-16 items-center rounded-full border-2 border-redMain bg-[#44414cf7] p-2 px-1 transition-all"
    >
      <div className="trnasition-all translate-x-full duration-100 ease-linear dark:translate-x-0">
        <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-black text-[8px] text-redMain">
          OFF
        </div>
      </div>
    </button>
  )
}

export default ThemeButton
