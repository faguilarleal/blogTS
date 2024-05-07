import { useState, useEffect } from "react";
import axios from "axios";

export const useApi = (url, method, trigger= false, data = null) => {
    const [info, setInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    

    const fetchData = async () => {
        try {
            let result = await axios({url, method, data})
            setInfo(result.data) // Actualiza el estado de la info con los datos obtenidos
            console.log('resultado',result.data)
        }
        catch (e) {
            setError(e)            
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (trigger){
            fetchData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, method, data]) 

    return {info, loading, error}

}
