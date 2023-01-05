import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './CharacterCard.module.css'

const CharacterCard = () => {
    let { id } = useParams();
    const [characterinfo, setCharacterInfo] = useState([]);
    const url = `    https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
        const axios = require('axios');
        axios.get(url)
            .then(function (response) {
                setCharacterInfo(response.data);
            })
            .catch(function (error) {
                setCharacterInfo([0])
            });

        return () => {
           
        }

    }, [url]);

    return (
        <div className={classes.outerDivContainer}>
            <div className={classes.mainOuterDivContainer}>
                <div style={{ textAlign: "center" }}>
                    <img className={classes.imageStyles} src={characterinfo.image} alt="CharacterImage" />
                </div>
                <div className={classes.containerDiv}>
                    <div className={classes.detailsDiv}>
                        Name: {characterinfo?.name}
                    </div>
                    <div className={classes.detailsDiv}>
                        Location: {characterinfo?.location?.name}
                    </div>
                    <div className={classes.detailsDiv}>
                        Species: {characterinfo.species}
                    </div>
                    <div className={classes.detailsDiv}>
                        Status: {characterinfo.status}
                    </div>
                    <div className={classes.detailsDiv}>
                        Gender: {characterinfo.gender}
                    </div>
                    <div className={classes.detailsDiv}>
                        {characterinfo.type === '' ? 'Type: Regular' : 'Type: ' + characterinfo.type}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CharacterCard
