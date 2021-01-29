import {NewPatient, NonSensitivePatient, Patient} from "../types";
import patientsEntries from "../../data/patients";

const patients: Patient[] = patientsEntries;

const getPatients = (): NonSensitivePatient[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (patient: NewPatient): Patient => {
    const newPatient = {
        id: (Math.random() * 1000000).toString(),
        ...patient
    };
    patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    addPatient
};