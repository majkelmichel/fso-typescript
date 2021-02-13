import React from "react";
import {Entry} from "../types";
import Hospital from "./Hospital";
import Occupational from "./Occupational";
import HealthCheck from "./HealthCheck";
import {assertNever} from "../constants";

interface Props {
    entry: Entry;
}

const EntryDetails: React.FC<Props> = ({entry}) => {
    switch (entry.type) {
        case "Hospital":
            return <Hospital entry={entry}/>;
        case "OccupationalHealthcare":
            return <Occupational entry={entry}/>;
        case "HealthCheck":
            return <HealthCheck entry={entry}/>;
        default:
            return assertNever(entry);
    }
}
export default EntryDetails