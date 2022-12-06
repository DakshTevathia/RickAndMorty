import React, { useEffect, useState } from 'react'
import SearchCharacters from "./SearchCharacters"
import Filters from "./Filters/Filters.js"
import ListOfCharacters from "./ListOfCharacters"
import Pagination from "@mui/material/Pagination"
// import Pagination from './Pagination'
import classes from "./Characters.module.css"
const Characters = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataLength, setDataLength] = useState(1);
    const [search, setSearch] = useState("");
    const dataPerPage = 20
    const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}`;
    useEffect(() => {
        const axios = require('axios');
        axios.get(url)
            .then(function (response) {
                setDataLength(response.data.info.count);
                setData(response.data.results);
            })
            .catch(function (error) {
                setData([0])
            });

        return () => {
            setTimeout(() => { console.log("CleanUp") }, 2000)
        }

    }, [url, search]);
    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div>
            <SearchCharacters setSearch={setSearch} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className={classes.FilterAndList}>

                <Filters data={data} />
                <div className={classes.paginationListOfCharsDiv}>
                    <div className={classes.divider} >
                        <ListOfCharacters data={data} />
                    </div>

                    {/*This is Material UI Pagination*/}
                    <div className={classes.pagination}>
                        <Pagination
                            color="standard"
                            shape='rounded'
                            defaultPage={1}
                            count={Math.ceil(dataLength / dataPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters