import React from "react";
import PropTypes from "prop-types";

function Card({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>---</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
