import React from 'react'
import ReactPaginate from 'react-paginate'
import './PaginationStyles.css'

const Pagination = ({ pCount, currentPage, setCurrentPage }) => {
    return <ReactPaginate
        onPageChange={(d) => { setCurrentPage((d.selected + 1)) }}
        pageCount={pCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        nextLabel="Next"
        previousLabel="Previous"
    />
}

export default Pagination