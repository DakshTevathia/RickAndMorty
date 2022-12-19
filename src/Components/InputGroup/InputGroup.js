import React from 'react'

const InputGroup = ({ episodeCount, setId, name }) => {
    const handleChange = (event) => {
        setId(event.target.value);
    };

    return (

        <div className="input-group mb-3" style={{
            width: "148px", zIndex: 1,
        }}>

            <style jsx>
                {`
                .selectItem{
                    color: #0a58ca;
                    border-color: #0a58ca;
                    border-radius: 10px !important;
                }
                `}
            </style>

            <select className="form-select selectItem" id="episodes" onChange={handleChange}>
                < option selected value='1'>Choose...</option>
                {
                    [...Array(episodeCount).keys()].map(a => {
                        return (
                            <option className='optionsHover' value={a + 1}>{`${name}: ${a + 1}`}</option>
                        )
                    })
                }
            </select >
        </div >

    )
}

export default InputGroup
