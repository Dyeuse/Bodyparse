import React, { useCallback, useState } from "react";
import DataForm from "./form/dataForm";
import Cards from "./results/cards";
import "./app.css";

function App() {
    const [personalData, setPersonalData] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
        hip: "",
    });
    const updatePersonalData = useCallback((newPersonalData) => {
        setPersonalData({ ...personalData, ...newPersonalData });
    });
    return (
        <div className="container">
            <h1>Bodyparse</h1>
            <DataForm updatePersonalData={updatePersonalData} />
            <Cards personalData={personalData} />
        </div>
    );
}

export default App;
