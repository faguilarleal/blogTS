import Header from "./home/Header.jsx";
import Content from "./home/Content.jsx";
import Articulos from "./home/Articulos.jsx";
import PropTypes from 'prop-types'
import Login from "./log/Login.jsx";
import Publicar from "./publicar/Publicar.jsx"
import Detalle  from "./detalle/Detalle.jsx";
import { rutaContext } from "./App.jsx";
import React from "react";
import Footer from "./home/footer.jsx";

function Approuter() {
  const {ruta} = React.useContext(rutaContext)
    
  switch (ruta) {
    case "/home":
        console.log("home")
      return (<>
        <Header></Header>
        <Content></Content>
        <Articulos></Articulos>
        <Footer></Footer>
        </>
      )
      
    case "/detalle":
        return (<>
        <Header></Header>
        <Detalle></Detalle>
        </>)

    case "/publicar":
        return(<>
        <Header></Header>
        <Publicar></Publicar>
        
        </>)
    case "/login":
        return (<>
        <Header ></Header>
        <Login></Login>
        </>)
    default:
        return (<>
            <Header></Header>
              <Content></Content>
              <Articulos ></Articulos>
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