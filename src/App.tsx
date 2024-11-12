
import { createContext, useState } from 'react'
import './App.css'
import { Button, ColorRed, CustomForm } from "./components"
import { GlobalProvider } from './context/global.provider'


function App() {

  const sayHello = () => {
    console.log("hello")
  }

  return (
    <GlobalProvider>
      <ColorRed>
      <Button parentMethod={sayHello} >
        hola
        
          2
        
      </Button>
      </ColorRed>
    </GlobalProvider>

  )
}

export default App
