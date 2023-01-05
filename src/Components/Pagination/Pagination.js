import React from 'react'
import ReactPaginate from 'react-paginate';
import './PaginationStyles.css'

const Pagination = ({ setPageNumber, pageNumber, pageDataCount }) => {

    let next = () => {
        setPageNumber((prevPageNumber) => (prevPageNumber + 1))
    };
    let prev = () => {
        if (pageNumber <= 1) { return 1; }
        setPageNumber((prevPageNumber) => (prevPageNumber - 1))
    };

    return (
        <div>
               <style jsx>
                {`
                .y{
                    width:60px
                  }
                `}
            </style>

            <ReactPaginate
                pageCount={pageDataCount}
                pageRangeDisplayed={2}
                previousLabel={<button className='btn btn-primary y' onClick={prev}>Prev</button>}
                nextLabel={<button className='btn btn-primary y' onClick={next}>Next</button>}
                className="pagination justify-content-center gap-2 my-2"
                pageClassName='page-item'
                pageLinkClassName='page-link m-1'
                onPageChange={(data) => { setPageNumber(data.selected + 1); }}
                activeClassName="active"
                breakLabel=". . . . ."
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            />
        </div>
    )
}

export default Pagination