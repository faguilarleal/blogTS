import React from 'react';
import { LogContext } from '../App.jsx';
import CardAdmin from './CardAdmin.jsx';
import Loading from '../home/Loading.jsx';

function Admin() {
    const {logi} = React.useContext(LogContext)

    const [listadoArticulos, setListado] = React.useState([])

    const [loading, setLoading] = React.useState(true); // Estado para indicar si se está cargando

    async function llamarAPI() {
        try {
            let artics = await fetch('http://127.0.0.1:3000/blogs')
            let articulos = await artics.json()
            console.log(articulos[0])
            setListado(articulos) // Actualiza el estado de listadoArticulos con los datos obtenidos
            setLoading(false) // cambia el estado de loading a false
        }
        catch (e) {
            console.error("Error al cargar datos de la API",e)
            setLoading(false) // cambia el estado de loading a false
        }
           
    }


    React.useEffect(() => {
        llamarAPI()
    }, [])

    function handleClick() {

    }

    if (loading) {
        return <Loading />;
    } else if (listadoArticulos.length === 0) {
        return <></>
    }

    return (
        <div id='admin'>
            <div id='articulos-admin'>
            {listadoArticulos.map(articulo => {
                    return <>
                    <CardAdmin id={articulo.id} title = {articulo.title} content={articulo.content} imagen={articulo.imagen} author={articulo.author}/>
                </>
                }  
                )}  
            </div>
    </div>
    )
}

export default Admin