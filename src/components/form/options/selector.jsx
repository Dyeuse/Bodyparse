import React from "react";
import PropTypes from "prop-types";

function Selector({ option1, option2, name }) {
  return (
    <div>
      <label htmlFor={option1}>{option1}</label>
      <input type="radio" id={option1} name={name} checked />
      <label htmlFor={option2}>{option2}</label>
      <input type="radio" id={option2} name={name} />
    </div>
  );
}

Selector.propTypes = {
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Selector;
