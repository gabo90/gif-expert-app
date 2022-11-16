import useFetchGifs from '../hooks/useFetchGifs';
import { GridItem } from '.';

export const GifGrid = ({category}:any) => {
    
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