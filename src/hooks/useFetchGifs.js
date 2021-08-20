import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(()=>{
        getGifs(category)
            .then(img => {
                setState({
                    data: img,
                    loading: false
                })
            })
    },[category])
    //el arreglo vacio dice que no existen dependencias
    //por eso solo se ejecuta una sola vez (LA VEZ QUE SE RENDERIZA)

    return state; // data:[] , loading:true
}