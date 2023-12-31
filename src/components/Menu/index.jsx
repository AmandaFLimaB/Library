import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles.scss"

export default function Menu(){
    
   const navigate = useNavigate()

    return(
        <div className="container-menu">
            <div className="home-menu" onClick={navigate('/')}> Biblioteca IRD </div>
            <div className="authors" onClick={navigate('/author')}> Autores </div>
            <div className="books" onClick={navigate('/book')}> Livros </div>
        </div>
    )
}