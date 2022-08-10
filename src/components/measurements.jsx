import React from "react";
import Measurement from "./measurement";

function Measurements() {
  return (
    <div>
      <Measurement label="height" unity="cm" />
      <Measurement label="weight" unity="kg" />
      <Measurement label="waist" unity="cm" />
      <Measurement label="neck" unity="cm" />
      <Measurement label="hip" unity="cm" />
    </div>
  );
}

export default Measurements;
