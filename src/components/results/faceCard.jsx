import React from "react";
import PropTypes from "prop-types";

function FaceCard({ title, result, visibility }) {
    return (
        <div
            className={`cardCountent concept ${visibility ? "displayed" : "undisplayed"}`}
        >
            <h2>{title}</h2>
            <div>{result}</div>
        </div>
    );
}

export default FaceCard;
