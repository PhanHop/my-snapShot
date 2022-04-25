import React from 'react'
import Image from './Image';

function Gallery({ images }) {
    let img;
    if(images.length > 0){
            img = images.map(image=>{
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image src = {url} key={id}/>
        })        
    }else{
        img = (
            <div>
                <h1>No image</h1>
            </div>
        )
    }
    return (
        <div>{img}</div>
    )
}

export default Gallery