import React from "react";

function IMGSelector() {
  return (
    <div>
      <label htmlFor="img">IMG</label>
      <select id="img" name="imgOption">
        <option value="auto">auto calc</option>
        <option value="spec">specific</option>
      </select>
    </div>
  );
}

export default IMGSelector;
