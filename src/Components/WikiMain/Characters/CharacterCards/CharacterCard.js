import React from 'react'
import classes from "./CharacterCard.module.css"

const CharacterCard = ({ data }) => {
      console.log(data);
    return (
        <div className={classes.maindiv}>
            <img className={classes.img} src={data.image} alt="CharacterImage" />

            <div className={classes.innerdiv}>
                <div className={classes.name} >{data.name}</div>
                <div className={classes.name}>{data.location.name}</div>
                <div className={classes.status}> {data.status}</div>
            </div >
        </div>
    )
}

export default CharacterCard