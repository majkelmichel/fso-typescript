import { State } from "./state";
import {Entry, Patient} from "../types";

interface AddEntryPayload {
  entry: Entry;
  id: string;
}

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "UPDATE_PATIENT";
      payload: Patient;
    }
  | {
      type: "ADD_ENTRY";
      payload: AddEntryPayload;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "UPDATE_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "ADD_ENTRY":
      const patient = {...state.patients[action.payload.id]};
      patient.entries = patient.entries.concat(action.payload.entry);
      const newState = {...state};
      newState.patients[action.payload.id] = patient;
      return {
        ...newState
      }
    default:
      return state;
  }
};

export const setPatientList = (patientList: Patient[]): Action => {
  return {
    type: "SET_PATIENT_LIST",
    payload: patientList
  };
};

export const updatePatient = (patientInfo: Patient): Action => {
  return {
    type: "UPDATE_PATIENT",
    payload: patientInfo
  };
};

export const addPatient = (patient: Patient): Action => {
  return {
    type: "ADD_PATIENT",
    payload: patient
  };
};

export const addEntry = (entry: Entry, id: string): Action => {
  return {
    type: "ADD_ENTRY",
    payload: {entry, id}
  }
};