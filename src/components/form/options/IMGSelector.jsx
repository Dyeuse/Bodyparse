import React from "react";

function IMGSelector({ options, handleChange }) {
    return (
        <div>
            <label htmlFor="img">IMG</label>
            <select
                value={options.autoIMG}
                id="img"
                name="autoIMG"
                onChange={handleChange}
            >
                <option value="auto">auto calc</option>
                <option value="spec">specific</option>
            </select>
        </div>
    );
}

export default IMGSelector;
