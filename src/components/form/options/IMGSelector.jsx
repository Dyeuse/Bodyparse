import React, { useContext } from "react";
import PropTypes from "prop-types";
import LanguageContext from "../../LanguageContext";

function IMGSelector({ options, handleChange }) {
    const { currentLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";
    return (
        <div>
            <label htmlFor="BFP">
                {English ? "BFP" : "IMG"}
                <select
                    value={options.autoBFP}
                    id="BFP"
                    name="autoBFP"
                    onChange={handleChange}
                >
                    <option value="auto">{English ? "auto calc" : "calc auto"}</option>
                    <option value="spec">{English ? "specific" : "spécifique"}</option>
                </select>
                {options.autoIMG === "auto" ? null : (
                    <input
                        name="specBFP"
                        type="number"
                        onChange={handleChange}
                        value={options.specBFP}
                        min="3"
                        max="60"
                    />
                )}
            </label>
        </div>
    );
}

IMGSelector.propTypes = {
    options: PropTypes.shape({
        gender: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
        autoBFP: PropTypes.string.isRequired,
        specBFP: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])])
            .isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default IMGSelector;
