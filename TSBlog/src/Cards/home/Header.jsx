import './Header.css'
import { LogContext, rutaContext} from '../App.jsx'
import { useContext } from 'react'


function Header(){

    const {logi} = useContext(LogContext)
    const {ruta, setRuta} = useContext(rutaContext)

    function goHome()  {
        window.history.pushState({}, ruta, "/home")
        setRuta("home")
    }

    function goLogin()  {
        if(logi){
            window.history.pushState({}, ruta, "/admin")
            setRuta("admin")
        }else{
            window.history.pushState({}, ruta, "/login")
            setRuta("login")
        }
        
    }

    return (
        <div id = "header">
            <img id='home-icon' src='./src/Cards/img/homa.png' onClick={goHome}></img>
            <div id="TituloBlog">Taylor Swift Blog </div>
            <img id='account-icon' src='./src/Cards/img/avatar.png' onClick={goLogin}></img>

        </div>
    );
}


export default Header;

