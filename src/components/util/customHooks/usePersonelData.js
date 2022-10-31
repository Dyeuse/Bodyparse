import { useCallback, useState } from "react";

function usePersonelData() {
    const [personalData, setPersonalData] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
        gender: "",
        activity: "",
        autoBFP: "",
        specBFP: "",
        available: false,
    });
    const updatePersonalData = useCallback((newPersonalData) => {
        setPersonalData(newPersonalData);
        console.log(newPersonalData);
    });

    return [personalData, updatePersonalData];
}

export default usePersonelData;
