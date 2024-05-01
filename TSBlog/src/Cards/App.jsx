import './App.css'
import { useEffect, useState, createContext } from 'react'
import Approuter from './router.jsx'

export const LogContext = createContext(null)
const idContext = createContext(null)


function App() {
  const [logi, setLog] = useState(false)
  const [idActual, setIdActual] = useState(null)
  
  const [ruta, setRuta] = useState('home')

  useEffect(() => {
    console.log(window.location.pathname)
    setRuta(window.location.pathname)
    window.history.pushState({}, ruta, ruta)

    if(window.location.pathname === '/'){
      window.history.pushState({}, ruta, "/home")
      setRuta('/home')
    } 
  }, [ruta])

  return (  
    <LogContext.Provider value={{logi, setLog}}>
      <idContext.Provider value={{idActual, setIdActual}}>
      <div id = "layout" >
        <Approuter ruta = {ruta} setRuta={setRuta} />
      </div>
      </idContext.Provider>
    </LogContext.Provider>   
      
  )
}

export default App
