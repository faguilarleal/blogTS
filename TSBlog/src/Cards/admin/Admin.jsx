import CardAdmin from './CardAdmin.jsx';
import Loading from '../Loading/Loading.jsx';
import {useApi} from '../hooks/useApi.jsx';
import './Admin.css';
import {rutaContext, LogContext} from '../App.jsx';
import React from 'react';

function Admin() {
    const {setLog} = React.useContext(LogContext)
    const {info, loading } = useApi('http://uwu-guate.site:3611/blogs', 'GET', true)
    const {ruta, setRuta} = React.useContext(rutaContext)
    

    if (loading) {
        return <Loading />;
    } 

    return (
        <div id='admin'>
            <div id='admin-header'>
                <button onClick={() => {window.history.pushState({}, ruta, "/publicar"); setRuta('/publicar')} }>Publicar</button>
                <button onClick={() => {window.history.pushState({}, ruta, "/home"); setRuta('/home')} }>Vista previa</button>
                <button id='cerrar-btn' onClick={() => {window.history.pushState({}, ruta, "/home"); setRuta('/home'); setLog(false); localStorage.removeItem('login') }}>Cerrar sesion</button>

            </div>

            <div className='articulos-admin'>
            {info.map(articulo => {
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