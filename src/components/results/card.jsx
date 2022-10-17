import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card({ children, result }) {
    return (
        <div className="card">
            <h2>{children}</h2>
            <div className="result">{result}</div>
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
};

export default Card;
