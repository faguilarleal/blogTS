import Header from "./Cards/home/Header.jsx";

function Approuter({ruta, setRuta}) {
    // <Header/>

    // <Content/>
    // <Articulos/>
  switch (ruta) {
    case "home":
      return <Header></Header>
      
    default:
  }
  
}

export default Approuter