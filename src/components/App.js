import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const appClass = false ? "App dark" : "App light"

  return (
  <div className={appClass}>
    <header>
    <div className="{`App ${isDarkMode ? 'dark' : 'light'}`">
    {isDarkMode} </div>
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  
    </header>
    <ShoppingList items={itemData} />
    
  </div>
  );
  }
    
export default App;
