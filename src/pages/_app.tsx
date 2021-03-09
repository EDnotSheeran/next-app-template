import { AppProps } from 'next/app'
import GlobalStyle from '@/components/Global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { lightTheme, darkTheme } from '@/components/Themes'
import { useState } from 'react'
import { Provider as AuthProvider } from 'next-auth/client'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
  }

  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
