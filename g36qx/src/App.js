import React from "react";
import "./styles.css";
import { useState } from "react";

const food = {
  "North Indian": [
    "Kadai Paneer and Naan",
    "Chole Bhature",
    "Rajma Chawal",
    "Kachori"
  ],

  Italian: ["Pizza", "Lasgna", "Mac and Cheese", "Garlic Bread"],

  "South Indian": ["Idli Sambhar", "Dosa", "Uttapam", "Ven Pongal"],

  "Street Food": ["Gol Gappe", "Chat", "Momos", "Burger"]
};

export default function App() {
  const [selectedCuisine, setCuisine] = useState("North Indian");

  function clickCuisine(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>Food Recommendations</h1>
      <p>Let's check out some amazing Food!</p>

      <div className="container">
        {Object.keys(food).map((cuisine) => (
          <button onClick={() => clickCuisine(cuisine)}>{cuisine}</button>
        ))}

        <hr />

        <ul>
          {food[selectedCuisine].map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
