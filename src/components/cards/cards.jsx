import React, { useContext } from "react";
import LanguageContext from "../util/contexts/LanguageContext";
import getDataCards from "../util/calculs/getDataCards";
import Card from "./card/card";
import "./_cards.scss";

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
