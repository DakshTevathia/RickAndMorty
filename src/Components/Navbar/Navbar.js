import React from 'react'
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.wiki}><a href="/">Rick and Morty Wiki</a></div>
            <div className={classes.rightGrid}>
                <div ><a href='/Characters'>Characters</a></div>
                <div ><a href="/Episode">Episodes</a></div>
                <div ><a href="/Location">Locations</a></div>
            </div>
        </div>
    )
}

export default Navbar