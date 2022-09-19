import React from "react";
import PropTypes from "prop-types";

function Card({ title, result }) {
    return (
        <div>
            <h2>{title}</h2>
            <div>{result}</div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
};

export default Card;
