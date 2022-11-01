import React, { useContext } from "react";
import PropTypes from "prop-types";
import Selector from "./selector/selector";
import LanguageContext from "../../../../util/contexts/LanguageContext";
import styles from "./selectors.module.scss";

function Selectors({ options, handleChange }) {
    const { currentLanguage, changeLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";
    return (
        <div className={styles.selectors}>
            <Selector
                handleChange={changeLanguage}
                selectedValue={currentLanguage}
                option1="English"
                option2="French"
                label1="English"
                label2="Français"
                name="language"
            />
            <Selector
                handleChange={handleChange}
                selectedValue={options.gender}
                option1="Male"
                option2="Female"
                label1={English ? "Male" : "Homme"}
                label2={English ? "Female" : "Femme"}
                name="gender"
            />
        </div>
    );
}

Selectors.propTypes = {
    options: PropTypes.shape({
        language: PropTypes.string,
        gender: PropTypes.string,
        activity: PropTypes.string,
        autoIMG: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Selectors;
