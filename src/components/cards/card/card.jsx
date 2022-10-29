import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import FaceCard from "./faceCard/faceCard";
import BackCard from "./backCard/backCard";
import styles from "./card.module.scss";

function Card({ frontTitle, result, backTitle, meaning }) {
    const [front, setfront] = useState(true);
    const onClickHandler = useCallback((e) => {
        if ((e.type === "keydown" && e.keyCode === 13) || e.type === "click") {
            setfront((d) => !d);
        }
    });

    return (
        <div className={styles.card}>
            <input
                type="checkbox"
                className={styles.toggler}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
            />
            <div className={styles.arrow}>
                {front ? <span>&#129134;</span> : <span>&#129132;</span>}
            </div>
            <FaceCard title={frontTitle} result={result} visibility={front} />
            <BackCard title={backTitle} meaning={meaning} visibility={front} />
        </div>
    );
}

Card.propTypes = {
    frontTitle: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    backTitle: PropTypes.string.isRequired,
    meaning: PropTypes.string.isRequired,
};

export default Card;
