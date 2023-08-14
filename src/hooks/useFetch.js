import React, { useState } from 'react';
import { useEffect } from 'react';

export const useFetch = (url) => {
    const [dataFetch, setDataFetch] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');

    useEffect( ()=> {
        getFetch();
    }, [url]);

    const getFetch = async() => {
        try {
        const resp = await fetch(url);
        const { data } = await resp.json();
        setDataFetch(data);
        setIsloading(false);
        }  catch(error) {
            setError(error.message);
        }
    }

    return {
        data: dataFetch,
        isLoading,
        hasErroe: error
    }
}