import './App.css'
import { useEffect, useState } from 'react'
import Approuter from './Cards/router.jsx'


function App() {

  const [ruta, setRuta] = useState('home')

  useEffect(() => {
    console.log(window.location.pathname)
    setRuta(window.location.pathname)
    if(window.location.pathname === '/'){
      window.history.pushState({}, ruta, "/home")
      setRuta('/home')
    } 
  }, [ruta])

  return (
      document.getElementById("root").style.width = '100%',
      document.getElementById("root").style.height = '100%',
      document.body.style.margin = 0,
     
      <div id = "layout" >
        <Approuter ruta = {ruta} setRuta={setRuta} />
      </div>
  )
}

export default App
