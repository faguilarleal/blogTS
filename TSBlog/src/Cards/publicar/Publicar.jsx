import { useEffect, useState } from 'react';
import './Publicar.css';

function Publicar() {

    const [lista, setLista] = useState({})

    async function llamarAPI() {
        try {
            let response = await fetch('http://127.0.0.1:3000/blogs', {method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title: lista.titulo,
                author: lista.autor,
                content: lista.contenido,
                imagen: lista.imagen
            })});

            if (!response.ok) {
                throw new Error(`Error al cargar datos de la API: ${response.statusText}`);
            }

            let data = await response.json();
            console.log(data); // Muestra la respuesta del servidor

            // setLoading(false) // cambia el estado de loading a false
        }
        catch (e) {
            console.error("Error al cargar datos de la API", e)
            alert('no se pudo publicar en la API')
            // setLoading(false) // cambia el estado de loading a false
        }
           
    }



    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');
    const [imagen, setImagen] = useState('');

   useEffect(() => {
        setLista({titulo, contenido, autor, imagen})
    }, [titulo, contenido, autor, imagen])


    const handleClick = () => {
        console.log('Datos a publicar:', lista);
        console.log(lista.titulo)
        if (titulo == '' || contenido == '' || autor == '' || imagen == ''){
            alert('Llene todos los campos')
        }else{
            llamarAPI() 
        }
    }

    return (
        <div id="publicar">
            <h1>Publicar</h1>
            <label>Titulo</label>
            <input type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <label>Contenido</label>
            <input type='text' id='content-info' value={contenido} onChange={(e) => setContenido(e.target.value)} />
            <label>Autor</label>
            <input type='text' value={autor} onChange={(e) => setAutor(e.target.value)} />
            <label>Imagen</label>
            <input type='text' value={imagen} onChange={(e) => setImagen(e.target.value)} />
            <button onClick={handleClick}>Publicar</button>
        </div>
    );
}

export default Publicar;
