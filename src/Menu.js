import React from 'react';
import './Menu.css';

const Menu = ({ items }) => {
  return (
    <article className='menu-items'>
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <div key={id} className='menu-item'>
            <img src={img} />
            <div className='item-info'>
              <div className='title-price'>
                <h2>{title}</h2>
                <h2>{price}</h2>
              </div>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default Menu;
