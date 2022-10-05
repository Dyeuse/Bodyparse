import React, { useCallback, useState, useContext } from "react";
import PropTypes from "prop-types";
import Measurements from "./measurements/measurements";
import Options from "./options/options";
import LanguageContext from "../LanguageContext";
import "./dataForm.css";

function useMeasurements() {
    const [measurements, setMeasurements] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
    });

    const handleMeasurementsChange = useCallback((e) => {
        const name = e.target.id;
        const newValues = +e.target.value;
        setMeasurements({ ...measurements, [name]: newValues });
    });

    return [measurements, handleMeasurementsChange];
}

function useOptions() {
    const [options, setOptions] = useState({
        gender: "Mal",
        activity: "1.2",
        autoBFP: "auto",
        specBFP: "",
    });

    const handleOptionsChange = useCallback((e) => {
        const { name } = e.target;
        const newValues = name === "specBFP" ? +e.target.value : e.target.value;
        setOptions({ ...options, [name]: newValues });
    });

    return [options, handleOptionsChange];
}

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
                <Measurements
                    measurements={measurements}
                    handleChange={handleMeasurementsChange}
                />
                <Options options={options} handleChange={handleOptionsChange} />
            </div>
            <button type="submit">{English ? "Calculate" : "Calculer"}</button>
        </form>
    );
}

DataForm.propTypes = {
    updatePersonalData: PropTypes.func.isRequired,
};

export default DataForm;
