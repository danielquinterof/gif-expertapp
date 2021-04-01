import {useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (artists) => {
   const [state, setState] = useState({
       data: [],
       loading: true
   });
    useEffect(() => {
        getGifs(artists)
            .then(imgs=>{
                setTimeout(() => {
                    setState ({
                        data: imgs,
                        loading:false
                    }); 
                }, 3000);
            });
    }, [artists]);
   return state;
}
