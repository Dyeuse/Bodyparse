import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card({ children, result }) {
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
            <div
                className={`cardCountent concept ${
                    isHidden ? "displayed" : "undisplayed"
                }`}
            >
                <h2>{children}</h2>
                <div>{result}</div>
            </div>
            <div
                className={`cardCountent definition ${
                    isHidden ? "undisplayed" : "displayed"
                }`}
            >
                <h3>Definition</h3>
                <div>Blablabla</div>
            </div>
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
};

export default Card;
