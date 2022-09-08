import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Measurements from "./measurements/measurements";
import Options from "./options/options";
import "./dataForm.css";

function useMeasurements() {
    const [measurements, setMeasurements] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
        hip: "",
    });

    const handleMeasurementsChange = useCallback((e) => {
        const name = e.target.id;
        const newValues = +e.target.value;
        console.log(typeof newValues);
        setMeasurements({ ...measurements, [name]: newValues });
    });

    return [measurements, handleMeasurementsChange];
}

function useOptions() {
    const [options, setOptions] = useState({
        language: "English",
        gender: "Mal",
        unity: "Metric",
        activity: "1.2",
        autoIMG: "auto",
    });

    const handleOptionsChange = useCallback((e) => {
        const { name } = e.target;
        const newValues = e.target.value;
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

    return (
        <form onSubmit={handleSubmit}>
            <div className="personal-data">
                <Measurements
                    measurements={measurements}
                    handleChange={handleMeasurementsChange}
                />
                <Options options={options} handleChange={handleOptionsChange} />
            </div>
            <button type="submit">Calculate</button>
        </form>
    );
}

DataForm.propTypes = {
    updatePersonalData: PropTypes.func.isRequired,
};

export default DataForm;
