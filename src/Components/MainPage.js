import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Components/MainPage.module.css'
const MainPage = () => {
    return (
        <div>
            <div className={classes.mainScreenDiv}>
                <h2>Welcome to R&M WiKi</h2>
                <p >Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon.</p>
                <p >The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals</p>
                <Link className={classes.exploreButton} to='/Characters' ><button>Explore!</button></Link>
            </div>
        </div >
    )
}

export default MainPage
