import patients from './patients.json';
import {Patient} from "../src/types";
import toNewPatient from "../src/utils";

const patientsEntries: Patient[] = patients.map(obj => {
    const object = toNewPatient(obj) as Patient;
    object.id = obj.id;
    return object;
});

export default patientsEntries;