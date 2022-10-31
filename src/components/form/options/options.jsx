import React from "react";
import PropTypes from "prop-types";
import Selectors from "./selectors/selectors";
import IMGSelector from "./BFPSelector/BFPSelector";
import Activity from "./activity/activity";
import styles from "./options.module.scss";

function Options({ options, handleChange }) {
    return (
        <div className={styles.options}>
            <Selectors options={options} handleChange={handleChange} />
            <IMGSelector options={options} handleChange={handleChange} />
            <Activity options={options} handleChange={handleChange} />
        </div>
    );
}

Options.propTypes = {
    options: PropTypes.shape({
        gender: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
        autoBFP: PropTypes.string.isRequired,
        specBFP: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])])
            .isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Options;
