import './Publicar.css';


function Publicar(){
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
                <button>Publicar</button>
        </div>
    )
}

export default Publicar;