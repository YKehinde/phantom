import React from 'react';

const Pagination = ({pageLimit, totalItems, currentPage, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / pageLimit); i++) {
    pageNumbers.push(i)
  }
  return (
    <>
    {totalItems > pageLimit ?
      <ul className="pagination">
        {currentPage > 1 ? 
          <li onClick = {() => paginate(currentPage - 1)} className = "page-link">
            <a>
              Previous
            </a>
          </li> :
          null
        }
        {pageNumbers.map(number => (
          <li key={number} className="page-number">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        {
          currentPage >= 1 && currentPage < pageNumbers.length ?
          <li onClick = {() => paginate(currentPage + 1)} className = "page-link">
            <a>
              Next
            </a>
          </li> :
          null
        }
      </ul>
    : null
  }
    </>
  );
}

export default Pagination;

