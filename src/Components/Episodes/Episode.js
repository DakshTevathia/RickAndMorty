import { useEffect, useState } from 'react'
import axios from 'axios';
import classes from './Episode.module.css';

const Episode = () => {
  const [selectSize, setSelectSize] = useState(51);
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  let [results,setResults]=useState([])
  const { air_date, name } = info;


  const [dropDownData, setDropDownData] = useState([]);
  let selectData = [];
  let episodeData;
  if (episodeData) {
    let { info, results } = episodeData;
  }
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setInfo(data);
    })();
  }, [id])

  for (let i = 1; i <= selectSize; ++i) {
    selectData.push(`Episode ${i}`);
  }

  const handleChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <div className='row'>
        <h1 className='text-center mb-3'>Episode:{' '}
          <span className='text-primary'>{name === "" ? "Unknown" : name}</span> </h1>
        <h5 className='text-center'>Air Date:{' '} {air_date === "" ? "Unknown" : air_date}</h5>
      </div>
      <div className={classes.episodeGrid}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }} >
          Pick Episodes
          {/* <div className={classes.dropdowndiv}> */}
          <select
            className={classes.dropdown}
            value={id}
            inputProps={{ 'aria-label': 'Without label' }}
            label="Choose Episode"
            onChange={handleChange}>
            {selectData.map((ele, idx) => { return (<option value={idx + 1}>{ele}</option>) })}
          </select>
          {/* <ListOfCharacters></ListOfCharacters> */}
          {/* </div> */}

        </div>
        <div >
          Cards are here
        </div>

      </div>
    </div >

  )
}

export default Episode