import { AppProps } from 'next/app'
import { GlobalStyle } from '@/components/Global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { lightTheme, darkTheme } from '@/components/Themes'
import { useState } from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
