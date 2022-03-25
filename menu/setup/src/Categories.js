import React from 'react';

const Categories = (props) => {
  return (
    <div className="btn-container">
          <button
            type="button"
            className="filter-btn"
            onClick={() => props.filterItems(props.category)}
          >
            {props.category}
          </button>
    </div>
  );
};

export default Categories;

