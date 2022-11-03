import React, { useCallback, useMemo, useState } from "react";
import usePersonelData from "../util/customHooks/usePersonelData";
import LanguageContext from "../util/contexts/LanguageContext";
import BodyParseForm from "./form/bodyParseForm";
import Cards from "./cards/cards";
import styles from "./app.module.scss";

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
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1>Bodyparse</h1>
                    <BodyParseForm updatePersonalData={updatePersonalData} />
                    <Cards personalData={personalData} />
                </div>
            </section>
        </LanguageContext.Provider>
    );
}

export default App;
