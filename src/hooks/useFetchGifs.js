import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        console.log(newImages);
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [])    
  
  
    return {
        images, //Es lo mismo que images: images,
        isLoading
    }
}
