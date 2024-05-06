import { useEffect, useState } from 'react';
import './Publicar.css';
import { useApi } from '../hooks/useApi';
// import axios from 'axios'
// import { useApi } from '../hooks/useApi';

function Publicar() {

    const [lista, setLista] = useState({})
    const [listo, setListo] = useState(false)

    const{ info, error } = useApi('http://127.0.0.1:3000/blogs', 'POST', listo, {title: lista.title, author: lista.author, content: lista.content, imagen: lista.imagen})
    console.log('error', error, info)
    console.log('listo', listo) 

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');
    const [imagen, setImagen] = useState('');

   useEffect(() => {
        setLista({title:titulo, author: autor, content: contenido, imagen:imagen})
    }, [titulo, contenido, autor, imagen])

    useEffect(() => {
        setListo(false)
    }, [listo])

    const handleClick = () => {
        console.log('Datos a publicar:', lista);
        console.log(listo, 'f')
        if (titulo == '' || contenido == '' || autor == '' || imagen == ''){
            alert('Llene todos los campos')
        }else{
            setListo(true)
            console.log('Publicado', listo)
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
