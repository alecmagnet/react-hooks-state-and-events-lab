import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  function handleFilterChange(e) {
    console.log(e)
    setSelectedCategory(e.target.value)
  }

  let itemsToDisplay = []

  if (selectedCategory === "All") {
    itemsToDisplay = items
  } else {
    itemsToDisplay = items.filter((item) => {
      return (item.category === selectedCategory)
    })
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") {
  //     return true;
  //   } else {
  //     return item.category === selectedCategory;
  //   }
  // })

export default ShoppingList;