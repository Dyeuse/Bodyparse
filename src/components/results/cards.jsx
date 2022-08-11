import React from "react";
import Card from "./card";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <Card title="IMC" />
      <Card title="IMG" />
      <Card title="FFMI" />
      <Card title="BM" />
      <Card title="DEE" />
    </div>
  );
}

export default Cards;
