import React from "react";
import { useNavigate } from 'react-router-dom'

export const Nav = () => {
    const navigate = useNavigate()
    const searchPage = () => {
        navigate('/search')
    }
    const homePage = () => {
        navigate('/')
    }

    return (
        <div className="rows navbar">
            <div><h1 style={{marginLeft:"20px"}}>WEATHER ⛅</h1></div>
            <div className="btns">
                <button onClick={() => searchPage()}>Search</button>
                <button onClick={() => homePage()}>Home</button>
                <button > 🧡 city</button>
            </div>

        </div>

    )
}