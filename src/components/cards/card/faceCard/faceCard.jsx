import React from "react";
import PropTypes from "prop-types";
import styles from "./faceCard.module.scss";

function FaceCard({ title, result, visibility }) {
    return (
        <div className={`${styles["face-card"]} ${visibility || styles.undisplayed}`}>
            <h2>{title}</h2>
            <div>{result}</div>
        </div>
    );
}

FaceCard.propTypes = {
    title: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    visibility: PropTypes.bool.isRequired,
};

export default FaceCard;
