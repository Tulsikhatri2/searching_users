import React from "react";

const Search = ({ item, handleChange }) => {
  return (
    <>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form className="form-control">
            <input
              className="form-control"
              placeholder="Search here..."
              value={item}
              onChange={handleChange}
            />
          </form>
        </div>

        <div className="col-3"></div>
      </div>
    </>
  );
};

export default Search;
