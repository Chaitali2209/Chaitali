import React, { useState } from "react";
import MealList from "./Meallist";
import './DietPlanner.css'
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export const DietPlanner = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <>
      <div className="dietplanner">
        <NavBar />
        <h1>PCOS Diet Planner</h1>
        <section className="controls">
          <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          />
          <button onClick={getMealData}>Get Daily Meal Plan</button>
        </section>
        {mealData && <MealList mealData={mealData} />}
      </div>
      <Footer />
    </>
  );
}

export default DietPlanner;