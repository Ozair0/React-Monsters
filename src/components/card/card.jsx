import React from "react";
import './style.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);