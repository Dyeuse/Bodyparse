import React, { useContext } from "react";
import PropTypes from "prop-types";
import Selector from "./selector";
import LanguageContext from "../../LanguageContext";

function Selectors({ options, handleChange }) {
    const { currentLanguage, changeLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";
    return (
        <div>
            <Selector
                handleChange={changeLanguage}
                selectedValue={currentLanguage}
                option1="English"
                option2="French"
                label1={English ? "English" : "Anglais"}
                label2={English ? "French" : "Français"}
                name="language"
            />
            <Selector
                handleChange={handleChange}
                selectedValue={options.gender}
                option1="Mal"
                option2="Female"
                label1={English ? "Mal" : "Homme"}
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
