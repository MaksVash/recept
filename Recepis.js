import React from "react";
import './App.css'

const Recepi =(props)=>{
    return(
        <div className="recept">
            <h1>{props.titil}</h1>
            <p>Caloris {Math.floor(props.cal)}</p>
            <img className="imadg" src={props.img}></img>
            <ul>
                {props.ing.map(i=><li key={i.toString()}>{i}</li>)}
            </ul>
        </div>
    )
}
export default Recepi;