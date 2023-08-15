import { useEffect, useState } from "react";
import { giphyAxios } from "../components/config/AxiosGiphy";

export const useFetchAxios = (url, method, params) =>  {

    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=> {
        getFetch();
    }, [url] )

    const getFetch = async() => {
        try { 
        const resp = await giphyAxios({
            url: url,
            method: method,
            params: {params}
        } ) ;
        const { data } = resp.data;
        setData(data);
        setIsloading(false);
        } catch(error) {
            console.log(error);
            setError(error.message);
        }
    }

    return {
        data: data,
        isLoading: isLoading,
        hasError: error
    }
}

useFetchAxios.defaultProps = {
    params: null,
}

