import React from 'react';
import './App.css';

function App() {
  const heading = "Office Space";

  const imgSrc = "https://via.placeholder.com/300x200.png?text=Office+Space";
  const imageElement = <img src={imgSrc} width="300" height="200" alt="Office Space" />;

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const rentColorClass = ItemName.Rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>
      {imageElement}

      <h2>Name: {ItemName.Name}</h2>
      <h3 className={rentColorClass}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
