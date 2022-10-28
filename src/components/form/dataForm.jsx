import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import useOptions from "../util/customHooks/useOptions";
import useMeasurements from "../util/customHooks/useMeasurements";
import LanguageContext from "../util/contexts/LanguageContext";
import Options from "./options/options/options";
import Measurements from "./measurements/measurements";
import "./_dataForm.scss";

function DataForm({ updatePersonalData }) {
    const [measurements, handleMeasurementsChange] = useMeasurements();
    const [options, handleOptionsChange] = useOptions();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        updatePersonalData({ ...measurements, ...options });
    });
    const { currentLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";

    return (
        <form onSubmit={handleSubmit}>
            <div className="personal-data">
                <Options options={options} handleChange={handleOptionsChange} />
                <Measurements
                    measurements={measurements}
                    handleChange={handleMeasurementsChange}
                />
            </div>
            <button type="submit">{English ? "Calculate" : "Calculer"}</button>
        </form>
    );
}

DataForm.propTypes = {
    updatePersonalData: PropTypes.func.isRequired,
};

export default DataForm;
