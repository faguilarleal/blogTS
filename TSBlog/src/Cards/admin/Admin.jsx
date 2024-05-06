import CardAdmin from './CardAdmin.jsx';
import Loading from '../Loading/Loading.jsx';
import {useApi} from '../hooks/useApi.jsx';

function Admin() {
    const {info, loading } = useApi('http://127.0.0.1:3000/blogs', 'GET', true)
    

    if (loading) {
        return <Loading />;
    } else if (info.length === 0) {
        return <></>
    }

    return (
        <div id='admin'>
            <div id='articulos-admin'>
            {info.map(articulo => {
                    return <>
                    <CardAdmin id={articulo.id} title = {articulo.title} content={articulo.content} imagen={articulo.imagen} author={articulo.author}/>
                </>
                }  
                )}  
            </div>
    </div>
    )
}

export default Admin