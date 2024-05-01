import { useState } from 'react'
import './Login.css'

function Login(){

    const [user, setUser] = useState("")
    const [cont, setCont] = useState("")

    const cambiarUsuario = (event) => {
        setUser(event.target.value)
    }

    const cambiarContra = (event) => {
        setCont(event.target.value)
    }

    function vereficar(){
    
        if(user=="francis" & cont=="123"){
            // setRuta("home")
            //cambiar la ruta a /home
            // window.history.pushState({}, "Home", "/home")
            alert("holaaa")
        }
    }

    return (
        <div className="login">
            {/* login funcional */}
            
            <div className="inputs">
                <h1>Login</h1>
                <label>Usuario</label>
                <br />
                <input type="text" name="usuario" onChange={cambiarUsuario} />
                <br />
                <label>Contraseña</label>
                <br />
                <input type="password" name="contraseña" onChange={cambiarContra}/>
                <br /><br />
                <button type="submit" onClick={vereficar}>Ingresar</button>
            </div>
                
           
        </div>
    )
}

export default Login