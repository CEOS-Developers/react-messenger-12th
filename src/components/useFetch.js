import { useState, useEffect } from 'react';


const useFetch = (callback, url) => {

    const [loading,setLoading]=useState(false);

    const fetchInitialChat = async () => {
        setLoading(true);
        const response = await fetch(url);
        const initialData = await response.json();
      
        callback(initialData);
        console.log(initialData);
        setLoading(false);
    };


    useEffect(() => {
        fetchInitialChat();
    }, [])

    return loading;
}

export default useFetch;