import { useEffect, useState } from "react";
import { apiGifExpert } from "../api/apiGifExpert";


export const useFetchGifs = ( itemCategory )  => {
    
    // useState que guarda los gifs de busqueda
    const [gifs, setGifs] = useState([]);

    // useState para saber si estan cargadas las imagenes o no
    const [isLoading, setIsLoading] = useState(false);

    // Funcion para traer los gifs
    const getsGifs = async () => {
      const result = await apiGifExpert(itemCategory);
      const { data } = result;
      setGifs(data);
      setIsLoading(true)
    };
    
    // Hook que trae los gifs segun la busqueda del usuario
    useEffect(() => {
      getsGifs();
    }, []);

    return {
        gifs,
        isLoading
    }
}
