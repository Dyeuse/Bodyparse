import React from "react";
import PropTypes from "prop-types";
import styles from "./measurement.module.scss";

function Measurement({ measurement, handleChange, id, label, unity, min, max }) {
    return (
        <div className={styles.measurement}>
            <label htmlFor={id}>{`${label} (${unity})`}</label>
            <input
                type="number"
                onChange={handleChange}
                id={id}
                value={measurement}
                min={min}
                max={max}
                required="required"
            />
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
