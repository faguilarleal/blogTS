import Header from "./home/Header.jsx";
import Admin from "./admin/Admin.jsx";
import Articulos from "./home/Articulos.jsx";
import PropTypes from 'prop-types'
import Login from "./log/Login.jsx";
import Publicar from "./publicar/Publicar.jsx"
import Detalle  from "./detalle/Detalle.jsx";
import { rutaContext, LogContext } from "./App.jsx";
import React, { useEffect } from "react";
import Footer from "./home/footer.jsx";
import Editar from "./publicar/Editar.jsx";

function Approuter() {
  const {ruta} = React.useContext(rutaContext)
  const {logi} = React.useContext(LogContext)

  // localstorage
  useEffect(() => {
    console.log("local storage",localStorage)
    // Almacenar un dato en nuestro storage por medio de setItem (propiedad, valor)
    localStorage.setItem("nombre", "Francis");
    localStorage.setItem("apellido", "Agular");
    
    // Obtener un dato de nuestro storage por medio de getItem
    console.log(localStorage.getItem("nombre")); 
    console.log(localStorage.getItem("apellido"));

    // Eliminar un dato de nuestro storage por medio de removeItem
    // localStorage.removeItem("nombre");
    
    // limpiar todos los datos 
    // localStorage.clear();
  }, [logi])



  switch (ruta) {
    case "/home":
        console.log("home")
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
        <Articulos ></Articulos>
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