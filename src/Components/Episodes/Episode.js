import { useEffect, useState } from 'react'
import axios from 'axios';
import classes from './Episode.module.css';

const Episode = () => {
  console.log("comes here");
  const [selectSize, setSelectSize] = useState(51);
  const [id, setId] = useState('');
  const [dropDownData, setDropDownData] = useState([]);
  let selectData = [];
  let episodeData;
  if (episodeData) {
    let { info, results } = episodeData;
  }
  // const api =
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then((response) => {
      setSelectSize(response.data.info.count)
      while (!selectSize) {

      };
      setDropDownData(selectData);
    }).catch((err) => { console.log(err) })
  }, [selectSize, id])

  for (let i = 1; i <= selectSize; ++i) {
    selectData.push(`Episode ${i}`);
  }

  const handleChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };
  console.log(selectData);

  return (
    <div className={classes.container}>
      <div className={classes.dropdowndiv}>
        <select
          className={classes.dropdown}
          value={id}
          inputProps={{ 'aria-label': 'Without label' }}
          label="Choose Episode"
          onChange={handleChange}>
          {selectData.map((ele, idx) => { return (<option value={idx + 1}>{ele}</option>) })}
        </select>
        {/* <ListOfCharacters></ListOfCharacters> */}
      </div>
    </div >

  )
}

export default Episode