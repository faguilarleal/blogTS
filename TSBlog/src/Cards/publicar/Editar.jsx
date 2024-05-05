import React, { useState, useContext } from 'react';
import { idContext } from '../App.jsx'
import { useApi } from '../hooks/useApi.jsx'


function Editar(){

    const {idActual} = useContext(idContext)
    const [update, setUpdate] = useState(false)

    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const [imagen, setImagen] = useState('')
    const [autor, setAutor] = useState('')


    const {info} = useApi('http://127.0.0.1:3000/blogs/'+idActual, 'GET', true)

    React.useEffect(() => {
        console.log('imprimir',info, idActual)
        if(info != null){
            setTitulo(info[0].title)
            setContenido(info[0].content)
            setImagen(info[0].imagen)
            setAutor(info[0].author)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info])
    

    React.useEffect(() => {
        if (update){
            setUpdate(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update])


    useApi('http://127.0.0.1:3000/blogs/'+idActual, 'PUT', update, {title: titulo, author: autor, content: contenido, imagen: imagen})


    const handleSubmit = () => {
        setUpdate(true)
    }


    return(
        <div>
            <h1>Editar</h1>

                <label>Titulo</label>
                <input type='text'  value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                <label>Contenido</label>
                <input type='text' value={contenido} onChange={(e) => setContenido(e.target.value)}></input>
                <label>Imagen</label>
                <input type='text' value={imagen} onChange={(e) => setImagen(e.target.value)}></input>
                <label>Autor</label>
                <input type='text' value={autor} onChange={(e) => setAutor(e.target.value)}></input>
                <button type='submit' onClick={handleSubmit}>Editar</button>
           
        </div>
    )
}

export default Editar;