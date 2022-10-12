/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <div className="navcontainer">
        <img src="./images/react-icon-small.png" width="10px"/>
            <div className="logo_name">ReactFacts</div>
            <div className="title">React Course-Project 1</div>
        </div>    
    )
}