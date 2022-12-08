import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import FilterButton from '../FilterButton';

const Status = ({ filterStatusData, setStatus, setPageNumber }) => {
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>Status</Accordion.Header>
            <Accordion.Body>
                <div className="d-flex flex-wrap gap-1">
                    {filterStatusData.map((ele, index) => (<FilterButton task={setStatus} setPageNumber={setPageNumber} item={ele} key={index} name="Status" index={index} />))}
                </div>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Status
