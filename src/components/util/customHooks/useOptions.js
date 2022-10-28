import { useCallback, useState } from "react";

function useOptions() {
    const [options, setOptions] = useState({
        gender: "Mal",
        activity: "1.2",
        autoBFP: "auto",
        specBFP: "",
    });

    const handleOptionsChange = useCallback((e) => {
        const { name } = e.target;
        const newValues = name === "specBFP" ? +e.target.value : e.target.value;
        setOptions({ ...options, [name]: newValues });
    });

    return [options, handleOptionsChange];
}

export default useOptions;
