import React, { useCallback, useState } from "react";
import DataForm from "./form/dataForm";
import Cards from "./results/cards";
import "./app.css";

function usePersonelData() {
    const [personalData, setPersonalData] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
        hip: "",
        language: "",
        gender: "",
        activity: "",
        autoIMG: "",
    });
    const updatePersonalData = useCallback((newPersonalData) => {
        setPersonalData(newPersonalData);
        console.log(newPersonalData);
    });

    return [personalData, updatePersonalData];
}

function App() {
    const [personalData, updatePersonalData] = usePersonelData();
    return (
        <div className="container">
            <h1>Bodyparse</h1>
            <DataForm updatePersonalData={updatePersonalData} />
            <Cards personalData={personalData} />
        </div>
    );
}

export default App;
