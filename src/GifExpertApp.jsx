import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export default function GifExportApp() {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    // setCategories(categories.concat('NewCat'));
    // setCategories([...categories, 'NewCat']);
    if (categories.find((item) => item.includes(newCategory))) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
        }
    </>
  );
}
