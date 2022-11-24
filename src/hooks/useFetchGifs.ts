
import { useEffect, useState } from "react";


import { fetchGifs } from "../helpers/fetchGifs";

const useFetchGifs = (category:any) => {

    const [images, setImages] = useState(Array());
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchImages = async() => {
        const imgs = await fetchGifs(category);
        setImages(imgs);
        setIsLoading(false);
    }
    
    useEffect(() => {
        fetchImages();
    }, []);


    return {
        images,
        isLoading
    }
}

export default useFetchGifs;