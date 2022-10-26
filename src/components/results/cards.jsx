import React, { useContext } from "react";
import Card from "./card";
import { calcBMI, calcBFP, calcFFMI, calcBMR, calcTDEE } from "../calculs/formulas";
import "./cards.scss";
import LanguageContext from "../LanguageContext";

function getDataCards(personalData, english) {
    const BMI = calcBMI(personalData);
    const BFP =
        personalData.autoBFP === "auto" ? calcBFP(personalData) : +personalData.specBFP;
    const FFMI = calcFFMI(personalData, BFP);
    const BMR = calcBMR(personalData, BFP);
    const TDEE = calcTDEE(personalData, BMR);

    const bilingualDataCards = {
        english: [
            ["BMI", BMI, "Stand for", "Body Mass Index"],
            ["BFP", BFP, "Stand for", "Body Fat Percentage"],
            ["FFMI", FFMI, "Stand for", "Fat Free Mass Index (ajusted)"],
            ["BMR", BMR, "Stand for", "Basal Metabolic Rate"],
            ["TDEE", TDEE, "Stand for", "Total Daily Energy Expenditure"],
        ],
        french: [
            ["IMC", BMI, "Sigle pour", "Indice de Masse Corporelle"],
            ["TMG", BFP, "Sigle pour", "Taux de Masse Grâce"],
            ["IMM", FFMI, "Sigle pour", "Indice de Masse Maigre (ajusté)"],
            ["MB", BMR, "Sigle pour", "Métabolisme Basal"],
            ["DEJ", TDEE, "Sigle pour", "Dépense Énergétique Journalière"],
        ],
    };

    return english ? bilingualDataCards.english : bilingualDataCards.french;
}

function Cards({ personalData }) {
    const { currentLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";
    const dataCard = getDataCards(personalData, English);

    const listOfCards = dataCard.map((item) => (
        <Card
            frontTitle={item[0]}
            result={item[1]}
            backTitle={item[2]}
            meaning={item[3]}
            key={item[0]}
        />
    ));

    return <div className="cards">{listOfCards}</div>;
}

export default Cards;
