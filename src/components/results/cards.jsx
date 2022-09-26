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
            <Card result={BMI}>BMI</Card>
            <Card result={BFP}>BFP</Card>
            <Card result={FFMI}>FFMI</Card>
            <Card result={BMR}>BMR</Card>
            <Card result={TDEE}>TDEE</Card>
        </div>
    );
}

export default Cards;
