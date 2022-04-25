import React from 'react'

function Image({ src }) {
    const style ={
        width: "200px",
        height: "150px",
        marginLeft: '15px',
        borderRadius: '5px'
    }
    return (
        <img src={src} alt="" style={style} />
    )
}

export default Image