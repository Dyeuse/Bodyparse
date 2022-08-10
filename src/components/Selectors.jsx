import React from "react";
import Selector from "./selector";

function Selectors() {
  return (
    <div>
      <Selector option1="English" option2="French" name="language" />
      <Selector option1="mal" option2="female" name="sex" />
      <Selector option1="metric" option2="imperial" name="unity" />
    </div>
  );
}

export default Selectors;
