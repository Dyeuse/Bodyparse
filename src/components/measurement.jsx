import React from "react";
import PropTypes from "prop-types";

function Measurement({ label, unity }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} />
      <div>{unity}</div>
    </div>
  );
}

Measurement.propTypes = {
  label: PropTypes.string.isRequired,
  unity: PropTypes.string.isRequired,
};

export default Measurement;
