import React, { useContext } from "react";
import PropTypes from "prop-types";
import Measurement from "./measurement/measurement";
import LanguageContext from "../../util/contexts/LanguageContext";
import "./_measurements.scss";

function Measurements({ measurements, handleChange }) {
    const { currentLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";
    return (
        <div className="measurements">
            <Measurement
                measurement={measurements.height}
                handleChange={handleChange}
                id="height"
                label={English ? "height" : "taille"}
                unity="cm"
                min="100"
                max="250"
            />
            <Measurement
                measurement={measurements.weight}
                handleChange={handleChange}
                id="weight"
                label={English ? "weight" : "poids"}
                unity="kg"
                min="30"
                max="300"
            />
            <Measurement
                measurement={measurements.waist}
                handleChange={handleChange}
                id="waist"
                label={English ? "waist" : "tour de taille"}
                unity="cm"
                min="40"
                max="200"
            />
            <Measurement
                measurement={measurements.neck}
                handleChange={handleChange}
                id="neck"
                label={English ? "neck" : "cou"}
                unity="cm"
                min="20"
                max="80"
            />
        </div>
    );
}

Measurements.propTypes = {
    measurements: PropTypes.shape({
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        weight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        waist: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        neck: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Measurements;
