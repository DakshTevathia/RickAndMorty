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
                console.log(response.data);
                setCharacterInfo(response.data);
            })
            .catch(function (error) {
                setCharacterInfo([0])
            });

        return () => {
            setTimeout(() => { console.log("CleanUp") }, 2000)
        }

    }, [url]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '80vh',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'stretch',
                columnGap: '2rem',
                justifyContent: 'center'
            }}>
                <div>
                    <img style={{
                        border: 'solid #0d6efd 1.5px',
                        borderRadius: '5px'
                    }} src={characterinfo.image} alt="CharacterImage" />
                </div>
                <div style={{ marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
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
