import React, {useEffect, useState} from "react";
import {Diagnosis} from "../types";
import axios from 'axios';
import {apiBaseUrl} from "../constants";

interface Props {
    code: Diagnosis['code']
}

const DiagnosisDescription: React.FC<Props> = (props) => {
    const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null);
    useEffect(() => {
        const fetchDiagnosis = async () => {
            const { data: diagnoses } = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`);
            const diagnosis = diagnoses.find(d => d.code === props.code);
            if (diagnosis) setDiagnosis(diagnosis);
        }
        fetchDiagnosis()
    }, [props.code]);

    if (!diagnosis) {
        return null;
    }
    return (
        <span>
            {diagnosis.name}
        </span>
    );
};

export default DiagnosisDescription;