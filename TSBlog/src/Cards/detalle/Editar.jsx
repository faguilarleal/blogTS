import React, { useState } from 'react';
import {idContext} from '../App.jsx'


function Editar(){

    const {idActual} = React.useContext(idContext)
    const [info, setInfo] = useState(null)

    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const [imagen, setImagen] = useState('')
    const [autor, setAutor] = useState('')

    async function handleSubmit(){
        try{
            let response = await fetch('http://127.0.0.1:3000/blogs/'+idActual)
            let data = await response.json()
            console.log('la info',idActual,data[0])
            setInfo(data[0])

        }catch(e){
            console.error("Error al cargar datos de la API",e)
        }
    }

    async function upDate() {

    }

    React.useEffect(() => {
        setInfo({titulo, contenido, autor, imagen})
    }, [titulo, contenido, autor, imagen])


    return(
        <div>
            <h1>Editar</h1>
            <form>
                <label>Titulo</label>
                <input type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                <label>Contenido</label>
                <input type='text' value={contenido} onChange={(e) => setContenido(e.target.value)}></input>
                <label>Imagen</label>
                <input type='text' value={imagen} onChange={(e) => setImagen(e.target.value)}></input>
                <label>Autor</label>
                <input type='text' value={autor} onChange={(e) => setAutor(e.target.value)}></input>
                <button type='submit' onClick={handleSubmit}>Editar</button>
            </form>
        </div>
    )
}

export default Editar;