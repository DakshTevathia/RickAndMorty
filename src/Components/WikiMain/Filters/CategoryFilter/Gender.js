import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import FilterButton from '../FilterButton';

const Gender = ({ filterGenderData, setGender, setPageNumber }) => {
    return (
        <Accordion.Item eventKey="2">
            <Accordion.Header>Gender</Accordion.Header>
            <Accordion.Body>
                <div className="d-flex flex-wrap gap-1">
                    {filterGenderData.map((ele, index) => (<FilterButton task={setGender} setPageNumber={setPageNumber} item={ele} key={index} name="Gender" index={index} />))}
                </div>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Gender
