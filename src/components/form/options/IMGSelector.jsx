import React from "react";
import PropTypes from "prop-types";

function IMGSelector({ options, handleChange }) {
    return (
        <div>
            <label htmlFor="img">
                IMG
                <select
                    value={options.autoIMG}
                    id="img"
                    name="autoIMG"
                    onChange={handleChange}
                >
                    <option value="auto">auto calc</option>
                    <option value="spec">specific</option>
                </select>
                {options.autoIMG === "auto" ? null : (
                    <input
                        name="specIMG"
                        type="number"
                        onChange={handleChange}
                        value={options.specIMG}
                        min="3"
                        max="60"
                    />
                )}
            </label>
        </div>
    );
}

IMGSelector.propTypes = {
    options: PropTypes.shape({
        language: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        unity: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
        autoIMG: PropTypes.string.isRequired,
        specIMG: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])])
            .isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default IMGSelector;
