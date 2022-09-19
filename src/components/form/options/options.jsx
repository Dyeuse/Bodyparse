import React from "react";
import PropTypes from "prop-types";
import Selectors from "./Selectors";
import IMGSelector from "./IMGSelector";
import Activity from "./activity";
import "./options.css";

function Options({ options, handleChange }) {
    return (
        <div className="options">
            <Selectors options={options} handleChange={handleChange} />
            <IMGSelector options={options} handleChange={handleChange} />
            <Activity options={options} handleChange={handleChange} />
        </div>
    );
}

Options.propTypes = {
    options: PropTypes.shape({
        language: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
        autoIMG: PropTypes.string.isRequired,
        specIMG: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])])
            .isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Options;
