import React from "react";
import PropTypes from "prop-types";

function Measurement({ measurement, handleChange, id, label, unity, min, max }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="number"
                onChange={handleChange}
                id={id}
                value={measurement}
                min={min}
                max={max}
            />
            <div>{unity}</div>
        </div>
    );
}

Measurement.propTypes = {
    measurement: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])])
        .isRequired,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    unity: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
};

export default Measurement;
