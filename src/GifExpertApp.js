import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp =  () => {
    const [artists, setartists] = useState(['Selena Gomez']);
    // const handleAdd = () => {
    //     //setartists( [...artists,'Ariana Grande']);
    //     setartists( artists => [...artists,'Ariana Grande']);
    // }
    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setartists={setartists}/>
        <hr/>
        <ol>
           { 
                artists.map( (artists)=>{
                    return <GifGrid key = {artists} artists = {artists}/>
                })
           } 
        </ol>
        </>
    );
}