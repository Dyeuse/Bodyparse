import React from "react";
import PropTypes from "prop-types";

function Selector({ handleChange, selectedValue, option1, option2, name }) {
    return (
        <div onChange={handleChange}>
            <label htmlFor={option1}>{option1}</label>
            <input
                type="radio"
                id={option1}
                name={name}
                value={option1}
                defaultChecked={selectedValue === option1}
            />
            <label htmlFor={option2}>{option2}</label>
            <input
                type="radio"
                id={option2}
                name={name}
                value={option2}
                defaultChecked={selectedValue === option2}
            />
        </div>
    );
}

Selector.propTypes = {
    handleChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired,
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Selector;
