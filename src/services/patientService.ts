import {NonSensitivePatient, Patient} from "../types";
import patientData from '../../data/patients.json';

const patients: Patient[] = patientData;

const getPatients = (): NonSensitivePatient[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {
    getPatients
};