import React from "react";
import PropTypes from "prop-types";
import Measurement from "./measurement";
import "./measurements.css";

function Measurements({ measurements, handleChange }) {
    return (
        <div className="measurements">
            <Measurement
                measurement={measurements.height}
                handleChange={handleChange}
                label="height"
                unity="cm"
                min="100"
                max="250"
            />
            <Measurement
                measurement={measurements.weight}
                handleChange={handleChange}
                label="weight"
                unity="kg"
                min="30"
                max="300"
            />
            <Measurement
                measurement={measurements.waist}
                handleChange={handleChange}
                label="waist"
                unity="cm"
                min="40"
                max="200"
            />
            <Measurement
                measurement={measurements.neck}
                handleChange={handleChange}
                label="neck"
                unity="cm"
                min="20"
                max="80"
            />
            <Measurement
                measurement={measurements.hip}
                handleChange={handleChange}
                label="hip"
                unity="cm"
                min="40"
                max="200"
            />
        </div>
    );
}

Measurements.propTypes = {
    measurements: PropTypes.shape({
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        weight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        waist: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        neck: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        hip: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Measurements;
