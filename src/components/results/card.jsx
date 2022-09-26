import React from "react";
import PropTypes from "prop-types";

function Card({ children, result }) {
    return (
        <div>
            <h2>{children}</h2>
            <div>{result}</div>
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
};

export default Card;
