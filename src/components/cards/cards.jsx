import React, { useContext } from "react";
import PropTypes from "prop-types";
import LanguageContext from "../../util/contexts/LanguageContext";
import getDataCards from "../../util/calculs/getDataCards";
import Card from "./card/card";
import styles from "./cards.module.scss";

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

    return <div className={styles.cards}>{listOfCards}</div>;
}

Cards.propTypes = {
    personalData: PropTypes.shape({
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        weight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        waist: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        neck: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]).isRequired,
        gender: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
        autoBFP: PropTypes.string.isRequired,
        specBFP: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])])
            .isRequired,
    }).isRequired,
};

export default Cards;
