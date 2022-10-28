import React from "react";
import PropTypes from "prop-types";
import "./_faceCard.scss";

function FaceCard({ title, result, visibility }) {
    return (
        <div className={`face-card ${visibility || "face-card--undisplayed"}`}>
            <h2>{title}</h2>
            <div>{result}</div>
        </div>
    );
}

export default FaceCard;
