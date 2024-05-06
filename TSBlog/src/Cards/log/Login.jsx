import { useState } from 'react'
import './Login.css'
import PropTypes from 'prop-types'
import { LogContext, rutaContext } from '../App.jsx'
import { useContext } from 'react'

function Login(){

    const [user, setUser] = useState("")
    const [cont, setCont] = useState("")
    const {ruta, setRuta} = useContext(rutaContext)

    const {setLog} = useContext(LogContext)

    const cambiarUsuario = (event) => {
        setUser(event.target.value)
    }

    const cambiarContra = (event) => {
        setCont(event.target.value)
    }

    function vereficar(){
    
        if(user=="francis" & cont=="123"){
            setRuta("admin")
            localStorage.setItem("login", true)
            window.history.pushState({}, ruta, "/admin")
            setLog(true)
        }
    }

    return (
        <div className="login">            
            <div className="inputs">
                <h1 id='h1-loading'>Log In</h1>
                <div id='user'>
                    <label>Usuario</label>
                    <br/>
                    <input type="text" name="usuario" onChange={cambiarUsuario} />
                </div>
                <br/>
                <div id='contra'>
                    <label>Contraseña</label>
                    <br />
                    <input type="password" name="contraseña" onChange={cambiarContra}/>
                </div>
                
                <br /><br />
                <button type="submit" onClick={vereficar} id='btn'>Ingresar</button>
            </div>
                
           
        </div>
    )
}

export default Login

Login.propTypes = {
    setRuta: PropTypes.func.isRequired,
    ruta: PropTypes.string.isRequired
}