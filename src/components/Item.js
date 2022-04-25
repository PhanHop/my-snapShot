import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PhotoContext } from '../Context/PhotoContext';
import Gallery from './Gallery';
import Loading from './Loading';

function Item() {

    const params = useParams();
    const item = params.itemSearch;
    const { image, loading, runSearch } = useContext(PhotoContext);
    useEffect(() => {
        runSearch(item);
    },[item]);
    return (
        <div>
            {!loading ? <Gallery images = {image}/> :<Loading />}
        </div>
    );
}

export default Item