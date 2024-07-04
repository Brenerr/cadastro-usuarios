import './styles/main.css'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { UsersContextProvider } from './contexts/UsersContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UsersContextProvider>
          <Router />
        </UsersContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
