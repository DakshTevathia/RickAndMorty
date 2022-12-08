import React, { useEffect, useState } from 'react'
import AccordianComponent from './AccordianComponent';
import classes from './Filters.module.css';

const Filters = ({ setGender, setSpecies, setStatus, setPageNumber }) => {
  const clearFilters = () => {
    setGender('');
    setSpecies('');
    setStatus('');
    setPageNumber('');
    window.location.reload(false);
  };
  let filterStatusData = ["Dead", "Alive", "Unknown"]
  let filterGenderData = ["Male", "Female", "Genderless", "Unknown"]
  let filterSpeciesData = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet",];

  return (<div className={classes.filterGrid}>
    <div className={classes.filterHeading}>Filters</div>
    <AccordianComponent filterGenderData={filterGenderData} setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} setPageNumber={setPageNumber} filterStatusData={filterStatusData} filterSpeciesData={filterSpeciesData} />
    <div className={classes.btnDiv}>
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  </div>)
}

export default Filters