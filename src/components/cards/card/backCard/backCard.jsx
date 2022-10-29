import React from "react";
import PropTypes from "prop-types";
import styles from "./backCard.module.scss";

function BackCard({ title, meaning, visibility }) {
    return (
        <div className={`${styles["back-card"]} ${visibility && styles.undisplayed}`}>
            <h3>{title}</h3>
            <div>{meaning}</div>
        </div>
    );
}

export default BackCard;
