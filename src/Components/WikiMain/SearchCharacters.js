import { useState, useEffect } from 'react'
import classes from './SearchCharacters.module.css'


const SearchCharacters = ({ search, setSearch, setCurrentPage }) => {
    useEffect(() => {
    }, []);

    const onInputChange = (e) => {
        setCurrentPage(1);
        setSearch(e.target.value);
    }
    const onButtonClick = () => {
        console.log("do nothing for now")
    }
    return (
        <div className={classes.inputdiv}>
            <input onChange={onInputChange} value={search} placeholder="Search Character"></input>
            {/* <button onClick={onButtonClick}>Search</button> */}
        </div>
    )
}

export default SearchCharacters