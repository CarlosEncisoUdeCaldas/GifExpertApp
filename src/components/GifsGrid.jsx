import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifsGrid = ({ itemCategory }) => {
  
  //hook personalizado que trae las imagenes
  const { gifs , isLoading } = useFetchGifs(itemCategory)
  console.log(isLoading);

  
  return (
    <div>
      <h3>{itemCategory}</h3>
      <div className="card-grid">
        {gifs.map((image) => 
          (
            <GifItem 
              key={ image.id } 
              // esparcimos todas las propiedades al componente
              {...image} 
            />
          )
        )}
      </div>
    </div>
  );
};
