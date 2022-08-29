import React from "react";
import PropTypes from "prop-types";

function Measurement({ measurement, handleChange, label, unity }) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input onChange={handleChange} id={label} value={measurement} />
            <div>{unity}</div>
        </div>
    );
}

Measurement.propTypes = {
    measurement: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    unity: PropTypes.string.isRequired,
};

export default Measurement;
