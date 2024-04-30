import './App.css'
import Header from './Cards/home/Header'
import Content from './Cards/home/Content'
import Articulos from './Cards/home/Articulos'
import Login from './Cards/logIn/Login.jsx'


function App() {

  return (
      document.getElementById("root").style.width = '100%',
      document.getElementById("root").style.height = '100%',
      document.body.style.margin = 0,
      // document.body.style.backgroundColor = 'purple',
      // <div>
      //     <Articulos/>
      // </div>
      <div id = "layout" >
          {/* <Header/>
    

          <Content/>
          <Articulos/> */}
          <Login/>
          
      </div>
  )
}

export default App
