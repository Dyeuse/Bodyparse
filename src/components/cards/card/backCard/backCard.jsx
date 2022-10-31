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

BackCard.propTypes = {
    title: PropTypes.string.isRequired,
    meaning: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
};

export default BackCard;
