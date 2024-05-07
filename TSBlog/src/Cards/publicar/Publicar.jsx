import { useEffect, useState } from 'react';
import './Publicar.css';
import { useApi } from '../hooks/useApi';

function Publicar() {

    const [lista, setLista] = useState({})
    const [listo, setListo] = useState(false)

    useApi('http://uwu-guate.site:3611/blogs', 'POST', listo, {title: lista.title, author: lista.author, content: lista.content, imagen: lista.imagen})
    console.log('listo', listo) 

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');
    const [imagen, setImagen] = useState('');
    console.log('img', imagen)

   useEffect(() => {
        setLista({title:titulo, author: autor, content: contenido, imagen:imagen })
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
            alert('Articulo publicado')
        }
    }
    
    console.log(imagen)
   

    return (
        <div id='all'>
        <div id="publicar">
            <h1>Publicar</h1>
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
            
            <button onClick={handleClick}>Publicar</button>
        </div>
        </div>
        
    );
}

export default Publicar;
