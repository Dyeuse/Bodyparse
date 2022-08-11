import React from "react";
import Measurements from "./measurements/measurements";
import Options from "./options/options";
import "./dataForm.css";

function DataForm() {
  return (
    <form>
      <div className="personal-data">
        <Measurements />
        <Options />
      </div>
      <button type="submit">Calculer</button>
    </form>
  );
}

export default DataForm;
