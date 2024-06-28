import React, { useState } from 'react'
import CatalogDisplay from './CatalogDisplay';

export default function Catalog() {
    const categories = ["electronics", "jewellery", "mens clothing", "women's clothing"];
    const [selectedCategory, setSelectedCategory] = useState("electronics");
    const handleSelect = (selectedCategory:string) => {
        console.log(selectedCategory);
        setSelectedCategory(selectedCategory);
} 
    return (
      <div>
        <CatalogDisplay
          categories={categories}
          onSelect={handleSelect}
          selected={selectedCategory}
        />
        <p>Category selected : {selectedCategory}</p>
      </div>
    );
} 

