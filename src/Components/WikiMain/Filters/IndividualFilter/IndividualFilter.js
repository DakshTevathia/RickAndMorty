import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './IndividualFilter.css';

const IndividualFilter = ({ filterName, filterData, passNameToParent }) => {
  const [selectedValue, setSelectedValue] = useState(true);
  const handleCheckboxChange = (event) => {
    if (event.target.value) { passNameToParent(event.target.name, selectedValue); }
    else { console.log(event.target.checked) }
    setSelectedValue(prevVal => !prevVal)
  }
  return (
    <div className="acc">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {filterName}
        </AccordionSummary>
        <AccordionDetails>
          {filterData.map((e, idx) => (<div className="inputDiv">
            <input type="checkbox" id={idx} name={e} value={e} onChange={handleCheckboxChange} />
            <label for={e}> {e}</label>
          </div>
          )
          )}

        </AccordionDetails>
      </Accordion></div>
  )
}

export default IndividualFilter