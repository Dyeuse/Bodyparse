import React, { useContext } from "react";
import Card from "./card";
import { calcBMI, calcBFP, calcFFMI, calcBMR, calcTDEE } from "../calculs/formulas";
import "./cards.css";
import LanguageContext from "../LanguageContext";

function Cards({ personalData }) {
    const { currentLanguage } = useContext(LanguageContext);
    const English = currentLanguage === "English";
    const BMI = calcBMI(personalData);
    const BFP = calcBFP(personalData);
    const FFMI = calcFFMI(personalData, BFP);
    const BMR = calcBMR(personalData, BFP);
    const TDEE = calcTDEE(personalData, BMR);
    return (
        <div className="cards">
            <Card result={BMI}>{English ? "BMI" : "IMC"}</Card>
            <Card result={BFP}>{English ? "BFP" : "IMG"}</Card>
            <Card result={FFMI}>{English ? "FFMI" : "IMM"}</Card>
            <Card result={BMR}>{English ? "BMR" : "TMB"}</Card>
            <Card result={TDEE}>{English ? "TDEE" : "DEJ"}</Card>
        </div>
    );
}

export default Cards;
