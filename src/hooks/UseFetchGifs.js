import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

   const [images, setImages] = useState([])
   const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        if (newImages.length > 0) {

            setImages(newImages);
        } else {
            setImages([{id:1, title:'uno'},{id:2, title:'dos'}])
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
