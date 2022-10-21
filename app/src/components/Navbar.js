import React from "react"
import LogoImagen from "../imgs/vibeslogo.png"
const Navbar = () => {
    return  (
    <header>
        <div class="logo">
        <img src={LogoImagen} alt=""></img>
        <h2>Vibes Code</h2>
        </div>

        <nav> 
            <a href="">Home</a>
            <a href="">Store</a>
            <a href="">Contact</a>
            <a href="">About us</a>
            <a href=""></a>
        </nav>
    </header>
    )
}


export default Navbar