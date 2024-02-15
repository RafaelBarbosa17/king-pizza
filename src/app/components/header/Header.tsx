'use client'
import Image from 'next/image'
import MenuBurguer from './MenuNav'
import { useTheme } from '@/app/context/ThemeContext'
import Search from './Search'
import { menuStorage } from '@/app/context/MenuPizza'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className="z-100 flex h-[70px] w-full flex-row items-center justify-between px-2 mg:px-8">
      <a href="/" className="h-min w-[125px] cursor-pointer">
        {theme === 'dark' ? (
          <Image
            src="/logo/logo-red-white.png"
            width={1000}
            height={1000}
            alt="logo-principal"
            className="h-full w-full"
          />
        ) : (
          <Image
            src="/logo/logo-red-black.png"
            width={1000}
            height={1000}
            alt="logo-principal"
            className="h-full w-full"
          />
        )}
      </a>
      <div className="z-30 flex items-center gap-2">
        <Search data={menuStorage} />
        <MenuBurguer />
      </div>
    </header>
  )
}

export default Header
