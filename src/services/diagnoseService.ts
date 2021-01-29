import { Diagnose } from "../types";
import diagnoseData from '../../data/diagnoses.json';

const diagnoses: Array<Diagnose> = diagnoseData;

const getDiagnoses = (): Diagnose[] => {
    return diagnoses;
};

const addDiagnose = (): null => {
    return null;
};


export default {
    getDiagnoses,
    addDiagnose
};