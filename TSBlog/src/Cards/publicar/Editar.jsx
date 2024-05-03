import React, { useState, useContext } from 'react';
import { idContext } from '../App.jsx'


function Editar(){

    const {idActual} = useContext(idContext)


    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const [imagen, setImagen] = useState('')
    const [autor, setAutor] = useState('')



    async function getApi(){
        try{
            let response = await fetch('http://127.0.0.1:3000/blogs/'+idActual)
            let data = await response.json()
            console.log('LA INFO ES ',data[0])
            setTitulo(data[0].title)
            setContenido(data[0].content)
            setImagen(data[0].imagen)
            setAutor(data[0].author)
        }catch(e){
            console.error("Error al cargar datos de la API",e)
        }
    }
    
    
    async function upDateAPI() {

        try {
            let response = await fetch('http://127.0.0.1:3000/blogs/'+idActual, {method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title: titulo,
                author: autor,
                content: contenido,
                imagen: imagen
            })});
            if (!response.ok) {
                throw new Error(`Error al hacer el update datos de la API: ${response.statusText}`);
            }

            let data = await response.json();
            console.log(data); // Muestra la respuesta del servidor

        }
        catch(e){   
            console.error("Error al cargar datos de la API", e)
            alert('no se pudo publicar en la API')
        }

    }

    React.useEffect(() => {
        getApi()
        console.log(idActual)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idActual])

    const handleSubmit = () => {
        upDateAPI()
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