import React from 'react'

function NavPage({page, setPage, pages}) {
    return (
      <header className="d-flex justify-content-between align-items-center">
        {page !== 1 && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Page {page - 1}
          </button>
        )}
        <p>Page {page}</p>
        {pages !== page && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Page {page + 1}
          </button>
        )}
      </header>
    );
}

export default NavPage