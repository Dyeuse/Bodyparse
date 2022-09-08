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
            />
            <Measurement
                measurement={measurements.weight}
                handleChange={handleChange}
                label="weight"
                unity="kg"
            />
            <Measurement
                measurement={measurements.waist}
                handleChange={handleChange}
                label="waist"
                unity="cm"
            />
            <Measurement
                measurement={measurements.neck}
                handleChange={handleChange}
                label="neck"
                unity="cm"
            />
            <Measurement
                measurement={measurements.hip}
                handleChange={handleChange}
                label="hip"
                unity="cm"
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
