import { GlobalStyle } from "./GlobalStyle"
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from "./contexts/CartContext"




export function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider> 
  )
}


