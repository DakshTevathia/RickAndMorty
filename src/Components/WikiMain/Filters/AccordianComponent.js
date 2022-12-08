import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Gender from './CategoryFilter/Gender'
import Species from './CategoryFilter/Species'
import Status from './CategoryFilter/Status'


const AccordianComponent = ({ filterGenderData, filterStatusData, filterSpeciesData, setPageNumber, setGender, setSpecies, setStatus, }) => {
    return (
        <div style={{ zIndex: 1, width: "16.5rem" }}>
            <Accordion>
                <Status filterStatusData={filterStatusData} setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species filterSpeciesData={filterSpeciesData} setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender filterGenderData={filterGenderData} setGender={setGender} setPageNumber={setPageNumber} />
            </Accordion>
        </div>
    )
}

export default AccordianComponent
