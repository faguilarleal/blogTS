import './Publicar.css';


function Publicar(){

    
    
    function handleClick(){

    }

    return(
        <div id="publicar">
            <h1>Publicar</h1>
           
                <label>Titulo</label>
                <input type='text'></input>
                <label>Contenido</label>
                <input type='text' id='content-info'></input>
                <label>Autor</label>
                <input type='text'></input>
                <label>Imagen</label>
                <input type='text'></input>
                <button onClick={handleClick}>Publicar</button>
        </div>
    )
}

export default Publicar;