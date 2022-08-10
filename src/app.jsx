import React from "react";
import Cards from "./components/cards";
import Measurements from "./components/measurements";
import Selectors from "./components/Selectors";
import IMGSelector from "./components/IMGSelector";
import Activity from "./components/activity";

function App() {
  return (
    <>
      <h1>Bodyparse</h1>
      <form>
        <Measurements />
        <Selectors />
        <IMGSelector />
        <Activity />
        <button type="submit">Calculer</button>
      </form>
      <Cards />
    </>
  );
}

export default App;
