import React from "react";
import Card from "./card";
import { calcBMI, calcBFP, calcFFMI, calcBMR, calcTDEE } from "../calculs/formulas";
import "./cards.css";

function Cards({ personalData }) {
    const BMI = calcBMI(personalData);
    const BFP = calcBFP(personalData);
    const FFMI = calcFFMI(personalData, BFP);
    const BMR = calcBMR(personalData, BFP);
    const TDEE = calcTDEE(personalData, BMR);
    return (
        <div className="cards">
            <Card title="BMI" result={BMI} />
            <Card title="BFP" result={BFP} />
            <Card title="FFMI" result={FFMI} />
            <Card title="BMR" result={BMR} />
            <Card title="TDEE" result={TDEE} />
        </div>
    );
}

export default Cards;
