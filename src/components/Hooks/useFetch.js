import { useEffect, useState } from "react";
import fetchDataFromApi from '../../Utils/Api';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        setLoading('Loading...');

        fetchDataFromApi(url).then((res) => {
            setLoading(false);
            setData(res);
        })
            .catch((err) => {
                setLoading('loaded');
                setError('Something went wrong');
            })
        
    }, [url]);

    return {
        data,
        loading,
        error
    }
}

export default useFetch;