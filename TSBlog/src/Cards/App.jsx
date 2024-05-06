/* eslint-disable react-refresh/only-export-components */
import './App.css'
import { useEffect, useState, createContext } from 'react'
import Approuter from './router.jsx'

export const LogContext = createContext(null)
export const idContext = createContext(null)
export const rutaContext = createContext(null)
// export const userContext = createContext(null)



function App() {
  const [logi, setLog] = useState(false)
  const [idActual, setIdActual] = useState(null)
  
  const [ruta, setRuta] = useState('home')

  useEffect(() => {
    setLog(localStorage.getItem('login') !== null)
    console.log(logi)
    console.log(window.location.pathname)
    setRuta(window.location.pathname)

    // if(window.location.pathname === '/'){
    //   window.history.pushState({}, ruta, "/home")
    //   setRuta('/home')
    // } 
  }, [logi, ruta])

  return (  
    <rutaContext.Provider value={{ruta, setRuta}}>
      <LogContext.Provider value={{logi, setLog}}>
      <idContext.Provider value={{idActual, setIdActual}}>
      <div id = "layout" >
        <Approuter/>
      </div>
      </idContext.Provider>
    </LogContext.Provider>   
    </rutaContext.Provider>
  
  )
}

export default App
