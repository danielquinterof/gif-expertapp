import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({artists}) => {
    const {data:images, loading }= useFetchGifs(artists);
    return (
        <>
            <h3>{artists}</h3>
            <div className="card-grid">
                {loading && <p className="animate__animated animate__flash">Cargando....</p>}
                { 
                images.map( (img) =>(
                    <GifGridItem
                        key={img.id}
                        {...img }
                    />
                ))
                }
            </div>
        </>
    )
}
