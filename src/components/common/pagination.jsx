import React from 'react';
import propTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemCount, pageSize, currentPage, onPageChange} = props;
    

    const pagesCount = Math.ceil(itemCount / pageSize);
    if(pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1 );

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {pages.map(page => (
                        <li key={page} className={page === currentPage ? "page-item active" : 'page-item'}>
                            <a className="page-link" onClick={() => onPageChange(page)} >{page}</a>
                        </li>
                  ))}
                </ul>
            </nav>
        </div>
    )
};

Pagination.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired,
}

export default Pagination
