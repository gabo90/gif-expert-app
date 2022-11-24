import useFetchGifs from '../hooks/useFetchGifs';
import { GridItem } from '.';

interface GifGridProps {
    category: String
}

export const GifGrid = ({category}:GifGridProps) => {
    
    const {images, isLoading} = useFetchGifs(category)
    
    return (
        <>
            <h2>{category}</h2>

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image:any) => (
                        <GridItem
                            key={image.id}
                            {...image}
                        />         
                    ))
                }
            </div>
        </>
    )
}