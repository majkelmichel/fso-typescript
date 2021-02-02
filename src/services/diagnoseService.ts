import { Diagnosis } from "../types";
import diagnoseData from '../../data/diagnoses.json';

const diagnoses: Array<Diagnosis> = diagnoseData;

const getDiagnoses = (): Diagnosis[] => {
    return diagnoses;
};

const addDiagnose = (): null => {
    return null;
};


export default {
    getDiagnoses,
    addDiagnose
};