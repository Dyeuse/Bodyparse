import { useCallback, useState } from "react";

function useMeasurements() {
    const [measurements, setMeasurements] = useState({
        height: "",
        weight: "",
        waist: "",
        neck: "",
    });

    const handleMeasurementsChange = useCallback((e) => {
        const name = e.target.id;
        const newValues = +e.target.value;
        setMeasurements({ ...measurements, [name]: newValues });
    });

    return [measurements, handleMeasurementsChange];
}

export default useMeasurements;
