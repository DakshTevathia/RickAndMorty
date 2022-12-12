import { useEffect, useState } from 'react'
import ListOfCharacters from '../WikiMain/Characters/ListofCharacters/ListOfCharacters';
import classes from './Episode.module.css';
import InputGroup from './InputGroup/InputGroup.js';


const Episode = () => {
  const [selectSize, setSelectSize] = useState(51);
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  let [data, setData] = useState([]);
  const { air_date, name } = info;


  const [dropDownData, setDropDownData] = useState([]);
  let selectData = [];
  let episodeData;
  if (episodeData) {
    let { info, data } = episodeData;
  }
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setInfo(data);
      console.log(data);
      let a = await Promise.all(data.characters.map((linkUrl) => { return fetch(linkUrl).then(res => res.json()) }));
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
        <h1 className='text-center mb-3'>Episode:{' '}
          <span className='text-primary'>{name === "" ? "Unknown" : name}</span> </h1>
        <h5 className='text-center'>Air Date:{' '} {air_date === "" ? "Unknown" : air_date}</h5>
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
            Pick Episodes
            <InputGroup setId={setId} episodeCount={51} name="Episode" />
          </div>
        </div>
        <div>
          <ListOfCharacters data={data} />

        </div>
      </div>
    </div >

  )
}

export default Episode