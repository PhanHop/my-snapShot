import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const navigate = useNavigate();
    const [valueSearch, setValueSearch] = useState();
    const handleSubmit = (e, valueSearch)=>{
        e.preventDefault();
        navigate(`/search/${valueSearch}`);
    }
    const formCss = {
        display: "flex",
        justifyContent: "center",
        margin: "10px auto"
    }
    const inputCss ={
        width: '35%',
        height: '40px',
        borderRadius: '6px',
        backgroundColor: '#ededed',
        border: '2px solid #747373'
    }
    const buttonCss={
        width: '80px',
        border: '2px solid ',
        borderRadius: '6px',
        marginLeft:'10px',
        fontSize:'18px',
        backgroundColor:'#b6d3ff'
    }
    
    return (
        <form action="" onSubmit={e=>handleSubmit(e, valueSearch)} style={formCss}>
            <input type="text" style={inputCss} onChange={(e)=>{setValueSearch(e.target.value)}} value={valueSearch}/>
            <button type='submit' style={buttonCss}>Search</button>
        </form>
    )
}

export default Form