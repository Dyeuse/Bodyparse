import React from "react";
import DataForm from "./form/dataForm";
import Cards from "./results/cards";
import "./app.css";

function App() {
  return (
    <div className="container">
      <h1>Bodyparse</h1>
      <DataForm />
      <Cards />
    </div>
  );
}

export default App;
