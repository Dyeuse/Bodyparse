import React from "react";
import PropTypes from "prop-types";
import styles from "./selector.module.scss";

function Selector({
    handleChange,
    selectedValue,
    option1,
    option2,
    label1,
    label2,
    name,
}) {
    return (
        <div className={styles.selector} onChange={handleChange}>
            <div className={styles["selector-option"]}>
                <input
                    type="radio"
                    id={option1}
                    name={name}
                    value={option1}
                    defaultChecked={selectedValue === option1}
                />
                <label htmlFor={option1}>{label1}</label>
            </div>
            <div className="selector-option">
                <input
                    type="radio"
                    id={option2}
                    name={name}
                    value={option2}
                    defaultChecked={selectedValue === option2}
                />
                <label htmlFor={option2}>{label2}</label>
            </div>
        </div>
    );
}

Selector.propTypes = {
    handleChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired,
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Selector;
