import React from 'react';
import './Categories.css';

const Categories = ({ filteredItems, Categories }) => {
  return (
    <div className='btn-container'>
      {Categories.map((category, index) => {
        return (
          <button
            className='primary-btn'
            key={index}
            type='button'
            onClick={() => {
              filteredItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
