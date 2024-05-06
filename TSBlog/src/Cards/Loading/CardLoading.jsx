import './CardLoading.css';



function CardLoading(){
    return(
        <div className='card-loading'>
            <div id='img-loading' >
                <div id='img-l'></div>
            </div>
            <div id='title-loading'>
                <div id='title-l'></div>
            </div>
        </div>
    )
}

export default CardLoading;