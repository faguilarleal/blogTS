import React, { useState, useContext } from 'react';
import { idContext, rutaContext } from '../App.jsx'
import { useApi } from '../hooks/useApi.jsx'
import './Publicar.css'


function Editar(){

    const {ruta, setRuta} = useContext(rutaContext)
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
        alert('Articulo editado')
      
    }


    return(

            <div id='all'>
        <div id="publicar">
            <h1>Editar</h1>
            <div id='text-publi'>
                <div>
                    <label className='lba'>Contenido</label>
                    <textarea id='content-info' value={contenido} onChange={(e) => setContenido(e.target.value)}></textarea>
          
                </div>
                <div id='publi-t'>
                        <label className='lba'>Titulo</label>
                        <input type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    
                        <label className='lba'>Autor</label>
                        <input type='text' value={autor} onChange={(e) => setAutor(e.target.value)} />                

                        <label className='lba'>Url de la imagen</label>
                        <input type='text' value={imagen} onChange={(e) => setImagen(e.target.value)} />

                        <img src={imagen} id='img-previa' alt='vista previa'></img>
                </div>
                
                  </div>
            
            <button onClick={handleSubmit}>Editar</button>
        </div>
        </div>
    )
}

export default Editar;