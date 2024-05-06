import Header from "./home/Header.jsx";
import Admin from "./admin/Admin.jsx";
import Articulos from "./home/Articulos.jsx";
import PropTypes from 'prop-types'
import Login from "./log/Login.jsx";
import Publicar from "./publicar/Publicar.jsx"
import Detalle  from "./detalle/Detalle.jsx";
import { rutaContext, LogContext } from "./App.jsx";
import React from "react";
import Footer from "./home/footer.jsx";
import Editar from "./publicar/Editar.jsx";
import Loading from "./Loading/Loading.jsx";

function Approuter() {
  const {ruta} = React.useContext(rutaContext)
  const {logi} = React.useContext(LogContext)



  switch (ruta) {
    case "/loading":
      return (<>
        <Header></Header>
        <Loading></Loading>
        <Footer></Footer>
      </>)
    case "/home":
      return (<>
        <Header></Header>
        <Articulos></Articulos>
        <Footer></Footer>
        </>
      )
    case "/editar":
      return (<>
        <Header></Header>
        {logi ? <Editar></Editar> : <h1>Por favor inicia sesion</h1>}
        <Footer></Footer>

      </>)
    case "/detalle":
        return (<>
        <Header></Header>
        <Detalle></Detalle>
        <Footer></Footer>

        </>)

    case "/publicar":
        return(<>
        <Header></Header>
        {logi ? <Publicar></Publicar> : <h1>Por favor inicia sesion</h1>}
        <Footer></Footer>

        
        </>)
    case "/login":
        return (<>
        <Header ></Header>
        <Login></Login>
        <Footer></Footer>

        </>)

    case "/admin":
      return(<>
      <Header></Header>
      {logi ? <Admin></Admin> : <h1>Por favor inicia sesion</h1>}
      <Footer></Footer>



      </>)
    default:
      return (<>
        <Header></Header>
        <Footer></Footer>
      </>)
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