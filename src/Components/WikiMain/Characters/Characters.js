import React, { useEffect, useState } from 'react'
import SearchCharacters from "./SearchCharacters/SearchCharacters"
import Filters from "../Filters/Filters.js"
import ListOfCharacters from "./ListofCharacters/ListOfCharacters"
import classes from "./Characters.module.css"
import Pagination from '../../Pagination/Pagination'
const Characters = () => {
    const [data, setData] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    const [pageDataCount, setPageDataCount] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;
    useEffect(() => {
        const axios = require('axios');
        axios.get(url)
            .then(function (response) {
                setPageDataCount(response.data.info.pages);
                setData(response.data.results);
            })
            .catch(function (error) {
                setData([0])
            });

        return () => {
            
        }

    }, [url, search]);
    return (
        <div style={{ height: 'inherit' }}>
            <div><p className="h2 text-center mt-4 zClassLevel">Characters</p>
            </div>
            <SearchCharacters setSearch={setSearch} currentPage={pageNumber} setCurrentPage={setPageNumber} />
            <div className={classes.FilterAndList}>

                <Filters setPageNumber={setPageNumber} setSpecies={setSpecies} setStatus={setStatus} setGender={setGender} />
                <div className={classes.paginationListOfCharsDiv}>
                    <div className={classes.divider} >
                        <ListOfCharacters pageLoaded='/Characters/' data={data} />
                    </div>
                    <div className={classes.paginationStyles}><Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} pageDataCount={pageDataCount} /></div>
                </div>
            </div>
        </div>
    )
}

export default Characters