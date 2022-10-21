import React from "react";
import PropTypes from "prop-types";

function BackCard({ title, meaning, visibility }) {
    return (
        <div
            className={`cardCountent definition ${
                visibility ? "undisplayed" : "displayed"
            }`}
        >
            <h3>{title}</h3>
            <div>{meaning}</div>
        </div>
    );
}

export default BackCard;
