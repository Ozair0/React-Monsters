import React from "react";
import './style.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search' onChange={handleChange} type='search'
           placeholder={placeholder}/>
);