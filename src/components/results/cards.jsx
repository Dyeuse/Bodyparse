import React from "react";
import Card from "./card";
import "./cards.css";

function Cards() {
    return (
        <div className="cards">
            <Card title="BMI" />
            <Card title="BFP" />
            <Card title="FFMI" />
            <Card title="BMR" />
            <Card title="TDEE" />
        </div>
    );
}

export default Cards;
