import React from "react";

function Activity() {
  return (
    <div>
      <label htmlFor="activity">physical activity</label>
      <select id="activity" name="Multiplier">
        <option value={1.1}> 1h / week</option>
        <option value={1.2}> 1h to 3h / week</option>
        <option value={1.35}> 4h to 6h / week</option>
        <option value={1.45}> 6h / week</option>
      </select>
    </div>
  );
}

export default Activity;
