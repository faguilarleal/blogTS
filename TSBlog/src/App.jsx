import './App.css'
import Header from './Cards/home/Header'
import Content from './Cards/home/Content'
import Articulos from './Cards/home/Articulos'
import Login from './Cards/logIn/Login.jsx'
import Detalle from './Cards/detalle/Detalle.jsx'
import Publicar from './Cards/publicar/Publicar.jsx'


function App() {

  return (
      document.getElementById("root").style.width = '100%',
      document.getElementById("root").style.height = '100%',
      document.body.style.margin = 0,
     
      <div id = "layout" >
        {/* <Header/>
        <Detalle></Detalle> */}
          {/* <Header/>
    

          <Content/>
          <Articulos/> */}
          {/* <Header/>
          <Login/> */}

          <Header/>
          <Publicar></Publicar>
          
      </div>
  )
}

export default App
