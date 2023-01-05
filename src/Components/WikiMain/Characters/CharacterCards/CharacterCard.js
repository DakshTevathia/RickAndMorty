import { Link } from 'react-router-dom'
import React from 'react'
import classes from "./CharacterCard.module.css"

const CharacterCard = ({ pageLoaded, data, key }) => {
    return (
        <Link to={`${pageLoaded}${data.id}`} key={data.id} className={classes.maindiv}>
            <img className={classes.img} src={data.image} alt="CharacterImage" />

            <div className={classes.innerdiv}>
                <div className={classes.name} >{data.name}</div>
                <div className={classes.location}>{data.location.name}</div>
                <div className={classes.status}> {data.status}</div>
            </div >
        </Link>
    )
}

export default CharacterCard