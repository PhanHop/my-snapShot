import React from "react";
import { apiKey } from "../api/config";
import { createContext, useState } from "react";
import axios from 'axios';
export const PhotoContext = createContext();
const PhotoContextProvider = props=>{
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);
     
    const runSearch = query=>{
        const axi = axios. get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
        axi.then(response =>{
            setImage(response.data.photos.photo);
            setLoading(false);
        })
        .catch(error=>{
            console.log(`Error: ${error}`)
        })
        console.log(axi.data);
    }
    return (
        <PhotoContext.Provider value={{image, loading, runSearch}}>
            {props.children}
        </PhotoContext.Provider>
    )
}
export default PhotoContextProvider;