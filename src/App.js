import React, { useState } from 'react';
import './App.css';
import data from './data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category == 'all') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((menuItem) => category === menuItem.category);
    setMenuItems(newItems);
  };
  return (
    <div className='container'>
      <div className='title'>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <Categories filteredItems={filteredItems} Categories={categories} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
