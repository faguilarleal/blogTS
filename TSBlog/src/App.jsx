import './App.css'
import { useEffect, useState} from 'react'
import Approuter from './Cards/router.jsx'

// const idContext = createContext(null)


function App() {
  // const [idActual, setIdActual] = useState(null)
  
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
    // <LogContext.Provider value={{log, setLog}}>
      <div id = "layout" >
        <Approuter ruta = {ruta} setRuta={setRuta} />
      </div>
    // </LogContext.Provider>   
      
  )
}

export default App
