import { createContext } from "react";

const Language = {
    currentLanguage: "English",
    changeLanguage: () => {},
};

const LanguageContext = createContext(Language);

export default LanguageContext;
