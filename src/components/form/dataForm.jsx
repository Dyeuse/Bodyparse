import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Measurements from "./measurements/measurements";
// import Options from "./options/options";
import "./dataForm.css";

function DataForm({ updatePersonalData }) {
    const [measurements, setMeasurements] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
        hip: "",
    });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        updatePersonalData(measurements);
    });

    const handleChange = useCallback((e) => {
        const name = e.target.id;
        const newValues = e.target.value;
        setMeasurements({ ...measurements, [name]: newValues });
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="personal-data">
                <Measurements measurements={measurements} handleChange={handleChange} />
                {/* <Options /> */}
            </div>
            <button type="submit">Calculate</button>
        </form>
    );
}

DataForm.propTypes = {
    updatePersonalData: PropTypes.func.isRequired,
};

export default DataForm;
