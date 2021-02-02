import {NewPatient, NonSensitivePatient, Patient} from "../types";
import patientsEntries from "../../data/patients";


const patients: Patient[] = patientsEntries;

const getPatients = (): NonSensitivePatient[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation, entries}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
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

const getPatient = (id: string): Patient | undefined => {
    const patient: Patient | undefined = patients.find(p => p.id === id);
    if (!patient) {
        return undefined;
    }
    return patient;
};

export default {
    getPatients,
    addPatient,
    getPatient
};