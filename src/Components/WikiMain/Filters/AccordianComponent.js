import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Gender from './CategoryFilter/Gender'
import Species from './CategoryFilter/Species'
import Status from './CategoryFilter/Status'
import classes from './Filters.module.css'


const AccordianComponent = ({ filterGenderData, filterStatusData, filterSpeciesData, setPageNumber, setGender, setSpecies, setStatus, }) => {
    return (
        <div className={classes.filterDiv} >
            <Accordion>
                <Status filterStatusData={filterStatusData} setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species filterSpeciesData={filterSpeciesData} setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender filterGenderData={filterGenderData} setGender={setGender} setPageNumber={setPageNumber} />
            </Accordion>
        </div>
    )
}

export default AccordianComponent
