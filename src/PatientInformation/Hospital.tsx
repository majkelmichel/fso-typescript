import React from "react";
import {HospitalEntry} from "../types";
import {Icon, Segment} from "semantic-ui-react";
import DiagnosisDescription from "./DiagnosisDescription";

interface Props {
    entry: HospitalEntry;
}

const Hospital: React.FC<Props> = ({entry}) => {
    return (
        <Segment>
            <h3>{entry.date} <Icon name='hospital'/></h3>
            <p>{entry.description}</p>
            {entry.diagnosisCodes ?
                <ul>
                    {entry.diagnosisCodes.map(code => <li key={code}>{code} <DiagnosisDescription code={code}/></li>)}
                </ul> :
                null
            }
            <p>
                discharge: {entry.discharge.date}<br/>
                criteria: {entry.discharge.criteria}
            </p>
        </Segment>
    )
}

export default Hospital;