import express from 'express';
import patientService from "../services/patientService";
import toNewPatient from "../utils";
import {Patient} from "../types";

const router = express.Router();

router.get('/', (_req, res) => {
    return res.send(patientService.getPatients());
});

router.post('/', (req, res) => {
    try {
        const newPatient = toNewPatient(req.body);

        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient)
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.get('/:id', (req, res) => {
    const patient: Patient | undefined = patientService.getPatient(req.params.id);

    res.send(patient);
})

export default router;