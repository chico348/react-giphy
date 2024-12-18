import { useFetchGifs } from "../hooks/UseFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    

  return (
    <>
    <h3>{category}</h3>
    {
        // es un AND logico y solo muestra el cargando cuando sea true 
    isLoading && <h2>Cargando...</h2>
    }
    <div className="card-grid">
        { 
        images.map(image => (
            <GifItem key={image.id} {...image} />
        ))
        }
    </div>
    </>
  )
}
