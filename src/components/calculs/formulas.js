// utilies calculations

function round(number, place = 0) {
    return Math.round(number * 10 ** place) / 10 ** place;
}

/* function convertInchToCm(value) {
    return round(value * 2.54); // 1 inch = 2.54 cm
}

function convertLbstoKg(value) {
    return round(value * 0.454); // 1 lb = 0.454 kg
} */

// BMI => Body Mass Index

function calcBMI({ height, weight }) {
    const BMI = weight / (height / 100) ** 2;
    return round(BMI, 1);
}

// BFP => Body Fat Percentage
// "BF%cal" => A novel body circumferences-based estimation of percentage body fat - Published online by Cambridge University Press:  19 March 2018

function calcManBFP({ height, waist, neck }) {
    const BFP = 10.111 - 0.239 * height + 0.808 * waist - 0.518 * neck;
    return round(BFP, 2);
}

function calcWomanBFP({ height, waist, neck }) {
    const BFP = 19.197 - 0.239 * height + 0.808 * waist - 0.518 * neck;
    return round(BFP, 2);
}

function calcBFP(personalData) {
    return personalData.gender === "Mal"
        ? calcManBFP(personalData)
        : calcWomanBFP(personalData);
}

// FFMI (Normalized) => Fat-Free Mass Index

function calcFatFreeMass(weight, BFP) {
    const fatFreeMass = weight * (1 - BFP / 100);
    return round(fatFreeMass, 2);
}

function calcBasicFFMI({ height, weight }, BFP) {
    const FFMI = calcFatFreeMass(weight, BFP) / (height / 100) ** 2;
    return round(FFMI, 2);
}

function calcFFMI(measurements, BFP) {
    // Normalized
    const FFMI =
        calcBasicFFMI(measurements, BFP) + 6.1 * (1.8 - measurements.height / 100);
    return round(FFMI, 1);
}

// BMR => Basal Metabolic Rate

function calcBMR({ weight }, BFP) {
    const BMR = 370 + 21.6 * calcFatFreeMass(weight, BFP);
    return round(BMR);
}

// TDEE => Total Daily Energy Expenditure

function calcTDEE({ activity }, BMR) {
    const TDEE = BMR * activity;
    return round(TDEE);
}

export { calcBMI, calcBFP, calcFFMI, calcBMR, calcTDEE };
