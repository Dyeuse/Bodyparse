import { calcBMI, calcBFP, calcFFMI, calcBMR, calcTDEE } from "./formulas";

function getDataCards(personalData, english) {
    let BMI = "---";
    let BFP = "---";
    let FFMI = "---";
    let BMR = "---";
    let TDEE = "---";
    if (personalData.available) {
        BMI = calcBMI(personalData);
        BFP =
            personalData.autoBFP === "auto"
                ? calcBFP(personalData)
                : +personalData.specBFP;
        FFMI = calcFFMI(personalData, BFP);
        BMR = calcBMR(personalData, BFP);
        TDEE = calcTDEE(personalData, BMR);
    }

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

export default getDataCards;
