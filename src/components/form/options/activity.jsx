import React, { useContext } from "react";
import LanguageContext from "../../LanguageContext";

function Activity({ options, handleChange }) {
    const { currentLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";
    return (
        <div>
            <label htmlFor="activity">
                {English ? "weekly physical activity" : "activité physique hebdomadaire"}
            </label>
            <select
                value={options.activity}
                onChange={handleChange}
                id="activity"
                name="activity"
            >
                <option value="1.2"> {English ? "sedentary" : "sédentaire"} </option>
                <option value="1.375">
                    {English ? "lightly active" : "légèrement actif"}
                </option>
                <option value="1.55">
                    {English ? "moderately active" : "modérément actif"}
                </option>
                <option value="1.725">{English ? "very active" : "très actif"}</option>
                <option value="1.9">
                    {English ? "extremely active" : "extrêmement actif"}
                </option>
            </select>
        </div>
    );
}

export default Activity;
