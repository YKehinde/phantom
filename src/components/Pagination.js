import React from 'react';

const Pagination = ({pageLimit, totalItems, paginate}) => {
  const pageNumbers = [];
for (let i = 1; i <= Math.ceil(totalItems / pageLimit); i++) {
  pageNumbers.push(i)
}
  return (
    <>
    {totalItems > pageLimit ?
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-number">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    : null
  }
    </>
  );
}

export default Pagination;

