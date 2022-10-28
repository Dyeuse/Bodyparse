import React from "react";
import PropTypes from "prop-types";
import "./_backCard.scss";

function BackCard({ title, meaning, visibility }) {
    return (
        <div className={`back-card ${visibility && "back-card--undisplayed"}`}>
            <h3>{title}</h3>
            <div>{meaning}</div>
        </div>
    );
}

export default BackCard;
