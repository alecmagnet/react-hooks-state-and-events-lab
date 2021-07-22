import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState(false)
  const appClass = mode ? "App dark" : "App light"
  const buttonText = mode ? "Light Mode" : "Dark Mode"

  function handleModeButton(e) {
    setMode((mode) => !mode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeButton}>{buttonText}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
