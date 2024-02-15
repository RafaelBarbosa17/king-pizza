'use client'
import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect
} from 'react'

export interface ThemeProviderTypes {
  theme: string
  changeTheme: () => void
}

export const ThemeContext = createContext<ThemeProviderTypes>({
  theme: 'dark',
  changeTheme: () => {}
})

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window != 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme : 'dark'
    } else {
      return 'dark'
    }
  })

  useEffect(() => {
    if (typeof window != 'undefined') {
      const htmlElement = document.documentElement
      htmlElement.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
