import './Header.css'
import PropTypes from 'prop-types'


function Header({ruta, setRuta}){

    function handleClick(){
        window.history.pushState({}, ruta, "/login")
        setRuta("login")
    }

    return (
        <div id = "header">
            <div id="TituloBlog" onClick={handleClick}>Taylor Swift Blog</div>
        </div>
    );
}

Header.propTypes = {
    ruta: PropTypes.string.isRequired,
    setRuta: PropTypes.func.isRequired
};

export default Header;

