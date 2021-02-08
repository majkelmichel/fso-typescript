import {Entry, NewPatient, NonSensitivePatient, Patient} from "../types";
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

const addEntry = (entry: Entry, id: string) => {
    if(!entry.description || !entry.date || !entry.specialist || !entry.type) {
        return { error: "error, wrong format of fields" };
    }
    if (!entry.id) {
        entry.id = (Math.random() * 1000000).toString();
    }
    if (entry.type === 'OccupationalHealthcare') {
        if (!entry.employerName) {
            return { error: "error, wrong format"};
        }
    } else if (entry.type === "HealthCheck") {
        if (!entry.healthCheckRating) {
            return { error: "error, healthCheckRating"};
        }
    } else if (entry.type === "Hospital") {
        if (!entry.discharge) {
            return { error: "error, wrong format"};
        }
    } else {
        return { error: "error, wrong format"};
    }
    const patient = patients.find(p => p.id === id);
    const patientIndex = patients.findIndex(p => p.id === id);
    if (patient) {
        patient.entries = patient.entries.concat(entry);
        patients[patientIndex] = patient;
    }
    return {
        ...entry
    }
}

export default {
    getPatients,
    addPatient,
    getPatient,
    addEntry
};