import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import FilterButton from '../FilterButton';


const Species = ({ filterSpeciesData, setSpecies, setPageNumber }) => {
    return (<Accordion.Item eventKey="1">
        <Accordion.Header>Species</Accordion.Header>
        <Accordion.Body>
            <div className="d-flex flex-wrap gap-1">
                {filterSpeciesData.map((ele, index) => (<FilterButton task={setSpecies} setPageNumber={setPageNumber} item={ele} key={index} name="Species" index={index} />))}
            </div>
        </Accordion.Body>
    </Accordion.Item>)
}

export default Species
