import React from "react";
import girl from "../../assets/img/girl_reading.svg";
import Menu from "../../components/Menu/index";
import "./styles.scss";

export default function Home(){
    return(
        <div className="container-principal-home">
            <div className="circle-dash-1"/>
            <div className="circle-dash-2"/>
            <div className="circle-lighter"/>
            <Menu />
            <div className="text-box">
                <h1>Onde a leitura te leva <a>a sonhar.</a></h1>
                <button>Saiba mais</button>
            </div>
            <div className="img-capa">
                <img src={girl} alt="" />
            </div>
            

        </div>
    )
}