import React, { useEffect, useState } from 'react'
import IndividualFilter from './IndividualFilter/IndividualFilter';
import classes from './Filters.module.css';
import GenderFilter from './GenderFilter';
import StatusFilter from './StatusFilter';
import Accordion from 'react-bootstrap/Accordion';

const Filters = () => {
  const [data, setData] = useState([]);
  const [parameter, setParameter] = useState({});

  let mainUrl;
  let url = 'https://rickandmortyapi.com/api/character';
  let url2 = 'https://rickandmortyapi.com/api/character/?status=alive';
  if (Object.values(parameter)[0]) {
    console.log('getsin')
    // mainUrl = url + `/?status= ${Object.keys(parameter[0])}`;
  }
  else {
    mainUrl = url;
  }
  console.log(mainUrl);
  useEffect(() => {
    const axios = require('axios');
    axios.get(url)
      .then(function (response) {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        setData([0])
      });

  }, [])
  const getName = (name, value) => {
    console.log('name', name);
    const name_text = name;
    console.log('value', value);
    setParameter({ [name_text]: value });
  }

  const clearFilters = () => { console.log('clear filter'); };
  let filterStatusData = ["Dead", "Alive", "Unknown"]
  let filterGenderData = ["Male", "Female", "Genderless", "Unknown"]

  return (<div className={classes.filterGrid}>
    <div className={classes.filterHeading}><h3>Filters</h3></div>
    {/* <StatusFilter />   */}
    {/* <GenderFilter /> */}
    <IndividualFilter filterName="Gender" filterData={filterGenderData} passNameToParent={getName} />
    <IndividualFilter filterName="Status" filterData={filterStatusData} passNameToParent={getName} />

    <div className={classes.btnDiv}>
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  </div>)
}

export default Filters