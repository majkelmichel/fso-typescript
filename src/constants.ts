import {TypeOption} from "./types";

export const apiBaseUrl = 'http://localhost:3001/api';

export const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

export const typeOptions: TypeOption[] = [
    { key: "HealthCheck", value: "HealthCheck", text: "Health Check"},
    { key: "Hospital", value: "Hospital", text: "Hospital" },
    { key: "OccupationalHealthcare", value: "OccupationalHealthcare", text: "Occupational Health Care"}
];