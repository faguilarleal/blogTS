import './Header.css'
import PropTypes from 'prop-types'
import { LogContext, rutaContext} from '../App.jsx'
import { useContext } from 'react'


function Header(){

    const {logi} = useContext(LogContext)
    const {ruta, setRuta} = useContext(rutaContext)
    console.log(logi)

    function goHome()  {
        window.history.pushState({}, ruta, "/home")
        setRuta("home")
    }

    function goLogin()  {
        window.history.pushState({}, ruta, "/login")
        setRuta("login")
    }

    return (
        <div id = "header">
            <img id='home-icon' src='./src/Cards/img/homa.png' onClick={goHome}></img>
            <div id="TituloBlog">Taylor Swift Blog </div>
            <img id='account-icon' src='./src/Cards/img/avatar.png' onClick={goLogin}></img>

            {/* {logi ? 'Hola':'adios'} */}
        </div>
    );
}

Header.propTypes = {
    ruta: PropTypes.string.isRequired,
    setRuta: PropTypes.func.isRequired
};

export default Header;

