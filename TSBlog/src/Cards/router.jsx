import Header from "./home/Header.jsx";
import Content from "./home/Content.jsx";
import Articulos from "./home/Articulos.jsx";
import PropTypes from 'prop-types'
import Login from "./log/Login.jsx";
import Publicar from "./publicar/Publicar.jsx"
import Detalle  from "./detalle/Detalle.jsx";
import { createContext, useState} from 'react'

export const LogContext = createContext(null)


function Approuter({ruta, setRuta}) {

  const [logi, setLog] = useState('jola')
    
  switch (ruta) {
    case "/home":
        console.log("home")
      return (<>
        <LogContext.Provider value={{logi, setLog}}>

            <Header ruta={ruta} setRuta={setRuta}></Header>
            <Content></Content>
            <Articulos ruta={ruta} setRuta={setRuta}></Articulos>
        </LogContext.Provider>   

        </>
      )
      
    case "/detalle":
        return (<>
        <Header ruta={ruta} setRuta={setRuta}></Header>

            <Detalle></Detalle>
        
        </>)

    case "/publicar":
        return(<>
        <Header ruta={ruta} setRuta={setRuta}></Header>
        <Publicar></Publicar>
        
        </>)
    case "/login":
        return (<>
        <Header ruta={ruta} setRuta={setRuta}></Header><Login ruta={ruta} setRuta={setRuta}></Login>
        </>)
    default:
        return (<>
            <Header ruta={ruta} setRuta={setRuta}></Header>
              <Content></Content>
              <Articulos ruta={ruta} setRuta={setRuta}></Articulos>
              </>
            )
  }
  
}

Approuter.defaultProps = {
  ruta: "/home"
}

Approuter.propTypes = {
  ruta: PropTypes.string,
  setRuta: PropTypes.func
}

export default Approuter