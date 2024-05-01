import './Header.css'
import PropTypes from 'prop-types'
// import { LogContext } from '../router.jsx'
import { useContext } from 'react'


function Header({ruta, setRuta}){

    // const {logi} = useContext(LogContext)
    // console.log(logi)
    function handleClick(){
        window.history.pushState({}, ruta, "/login")
        setRuta("login")
    }

    return (
        <div id = "header">
            <div id="TituloBlog" onClick={handleClick}>Taylor Swift Blog </div>
        </div>
    );
}

Header.propTypes = {
    ruta: PropTypes.string.isRequired,
    setRuta: PropTypes.func.isRequired
};

export default Header;

