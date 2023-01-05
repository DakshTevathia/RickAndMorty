import { useEffect } from 'react'
import classes from './SearchCharacters.module.css'


const SearchCharacters = ({ search, setSearch, setCurrentPage }) => {
    useEffect(() => {
    }, []);

    const onInputChange = (e) => {
        setCurrentPage(1);
        setSearch(e.target.value);
    }
    return (
        <div className={classes.inputdiv}>
            <input onChange={onInputChange} value={search} placeholder="Search Character"></input>
        </div>
    )
}

export default SearchCharacters