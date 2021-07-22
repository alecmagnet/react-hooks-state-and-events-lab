import React, { useState } from "react";

function Item({ name, category }) {
  const [itemState, setItemState] = useState(false)
  const liClass = itemState ? "in-cart" : ""
  const buttonText = itemState ? "Add to Cart" : "Remove from Cart"

  function onClickAdd() {
    setItemState(!itemState)
  }
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={onClickAdd}>{buttonText}</button>
    </li>
  );
}

export default Item;
