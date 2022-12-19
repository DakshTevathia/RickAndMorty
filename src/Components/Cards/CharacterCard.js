import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
        <div className='container' style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '50px',
            alignItems: 'center'
        }}>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col'>
                            <img style={{
                                border: 'solid #1bff00e0 2px',
                                borderRadius: '5px'
                            }} src={characterinfo.image} alt="CharacterImage" />
                        </div>
                    </div>
                    <div style={{ marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className='row' style={{ width: '304px' }}>
                            <div className='col' style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'solid 2px #1bff00e0',
                                marginTop: '0.3rem',
                                borderRadius: '5px',
                                fontFamily: "Lucida Console",
                                color: '#0d6efd',
                            }}>
                                Name: {characterinfo?.name}
                            </div>
                        </div>
                        <div className='row' style={{ width: '304px' }}>
                            <div className='col'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'solid 2px #1bff00e0',
                                    marginTop: '0.3rem',
                                    borderRadius: '5px',
                                    fontFamily: "Lucida Console",
                                    color: '#0d6efd'
                                }}>
                                Location: {characterinfo?.location?.name}
                            </div>
                        </div>
                        <div className='row' style={{ width: '304px' }}>
                            <div className='col'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'solid 2px #1bff00e0',
                                    marginTop: '0.3rem',
                                    borderRadius: '5px',
                                    fontFamily: "Lucida Console",
                                    color: '#0d6efd'
                                }}>
                                Species: {characterinfo.species}
                            </div>
                        </div>
                        <div className='row' style={{ width: '304px' }}>
                            <div className='col'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'solid 2px #1bff00e0',
                                    marginTop: '0.3rem',
                                    borderRadius: '5px',
                                    fontFamily: "Lucida Console",
                                    color: '#0d6efd'
                                }}>
                                Status: {characterinfo.status}
                            </div>
                        </div>
                        <div className='row' style={{ width: '304px' }}>
                            <div className='col'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'solid 2px #1bff00e0',
                                    marginTop: '0.3rem',
                                    borderRadius: '5px',
                                    fontFamily: "Lucida Console",
                                    color: '#0d6efd'
                                }}>
                                Gender: {characterinfo.gender}
                            </div>
                        </div>
                        <div className='row' style={{ width: '304px' }}>
                            <div className='col'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'solid 2px #1bff00e0',
                                    marginTop: '0.3rem',
                                    borderRadius: '5px',
                                    fontFamily: "Lucida Console",
                                    color: '#0d6efd'
                                }}>
                                {characterinfo.type === '' ? 'Type: Regular' : 'Type: ' + characterinfo.type}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CharacterCard
