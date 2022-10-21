import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import FaceCard from "./faceCard";
import BackCard from "./backCard";
import "./card.css";

function Card({ frontTitle, result, backTitle, meaning }) {
    const [isHidden, setisHidden] = useState(true);
    const onClickHandler = useCallback((e) => {
        if ((e.type === "keydown" && e.keyCode === 13) || e.type === "click") {
            setisHidden((d) => !d);
        }
    });

    return (
        <div className="card">
            <input
                type="checkbox"
                className="toggleDefinition"
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
            />
            <div className="arrow">
                {isHidden ? <span>&#129134;</span> : <span>&#129132;</span>}
            </div>
            <FaceCard title={frontTitle} result={result} visibility={isHidden} />
            <BackCard title={backTitle} meaning={meaning} visibility={isHidden} />
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
