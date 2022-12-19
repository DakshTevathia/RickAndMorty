import { useEffect, useState } from 'react'
import InputGroup from '../InputGroup/InputGroup';
import ListOfCharacters from '../WikiMain/Characters/ListofCharacters/ListOfCharacters';
import classes from '../Episodes/Episode.module.css';


const Location = () => {
    const [selectSize, setSelectSize] = useState(51);
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    let [data, setData] = useState([]);
    const { name, type, dimension } = info;


    const [dropDownData, setDropDownData] = useState([]);
    let selectData = [];
    let episodeData;
    if (episodeData) {
        let { info, data } = episodeData;
    }
    let api = `https://rickandmortyapi.com/api/location/${id}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            setInfo(data);
            console.log(data);
            let a = await Promise.all(data.residents?.map((linkUrl) => { return fetch(linkUrl).then(res => res.json()) }));
            console.log(a);
            setData(a);
        })();
    }, [api])

    for (let i = 1; i <= selectSize; ++i) {
        selectData.push(`Episode ${i}`);
    }

    const handleChange = (event) => {
        setId(event.target.value);
    };

    return (
        <div>
            <div className='row'>
                <h1 className='text-center mb-3'>Location:{' '}
                    <span className='text-primary'>{name === "" ? "Unknown" : name}</span> </h1>
                <h5 className='text-center'>Dimension:{' '} {dimension === "" ? "Unknown" : dimension}</h5>
                <h5 className='text-center'>Type:{' '} {dimension === "" ? "Unknown" : type}</h5>
            </div>
            <div className={classes.episodeGrid}>
                <div style={{
                    display: "flex",
                    // justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }} >
                    <div style={{
                        position: "fixed",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "10px",
                        marginTop: "30px"
                    }}>
                        Pick Location
                        <InputGroup setId={setId} episodeCount={126} name="Location" />
                    </div>
                </div>
                <div>
                    <ListOfCharacters pageLoaded='/Location/' data={data} />

                </div>
            </div>
        </div >

    )
}

export default Location