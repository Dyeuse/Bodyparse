import React from "react";
import PropTypes from "prop-types";
import Selector from "./selector";

function Selectors({ options, handleChange }) {
    return (
        <div>
            <Selector
                handleChange={handleChange}
                selectedValue={options.language}
                option1="English"
                option2="French"
                name="language"
            />
            <Selector
                handleChange={handleChange}
                selectedValue={options.gender}
                option1="Mal"
                option2="Female"
                name="gender"
            />
            <Selector
                handleChange={handleChange}
                selectedValue={options.unity}
                option1="Metric"
                option2="Imperial"
                name="unity"
            />
        </div>
    );
}

Selectors.propTypes = {
    options: PropTypes.shape({
        language: PropTypes.string,
        gender: PropTypes.string,
        unity: PropTypes.string,
        activity: PropTypes.string,
        autoIMG: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Selectors;
