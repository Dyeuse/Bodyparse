import React, { useCallback, useMemo, useState } from "react";
import LanguageContext from "./LanguageContext";
import DataForm from "./form/dataForm";
import Cards from "./results/cards";
import "./app.css";

function usePersonelData() {
    const [personalData, setPersonalData] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
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
    const [currentLanguage, setCurrentLanguage] = useState("English");
    const changeLanguage = useCallback(() =>
        setCurrentLanguage((l) => (l === "English" ? "French" : "English"))
    );
    const value = useMemo(
        () => ({
            currentLanguage,
            changeLanguage,
        }),
        [currentLanguage, changeLanguage]
    );
    return (
        <LanguageContext.Provider value={value}>
            <div className="container">
                <h1>Bodyparse</h1>
                <DataForm updatePersonalData={updatePersonalData} />
                <Cards personalData={personalData} />
            </div>
        </LanguageContext.Provider>
    );
}

export default App;
