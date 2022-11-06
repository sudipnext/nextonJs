import React from 'react'
import img from '../assets/troll-face.png.png'
export default function Header(){
    return(
        <nav className="navbar">
            <img src={img} ></img>
            <h1 className="Logo">Meme Generator</h1>
            <h3 className="project">React Project 2</h3>
        </nav>
    )
}