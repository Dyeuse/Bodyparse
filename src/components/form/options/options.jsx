import React from "react";
import Selectors from "./Selectors";
import IMGSelector from "./IMGSelector";
import Activity from "./activity";
import "./options.css";

function Options() {
  return (
    <div className="options">
      <Selectors />
      <IMGSelector />
      <Activity />
    </div>
  );
}

export default Options;
