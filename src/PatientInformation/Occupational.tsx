import React from "react";
import {OccupationalHealthCareEntry} from "../types";
import {Icon, Segment} from "semantic-ui-react";
import DiagnosisDescription from "./DiagnosisDescription";

interface Props {
    entry: OccupationalHealthCareEntry;
}

const Occupational: React.FC<Props> = ({ entry }) => {
    return (
        <Segment>
            <h3>{entry.date} <Icon name='doctor'/></h3>
            <p>{entry.description}</p>
            {entry.diagnosisCodes ?
                <ul>
                    {entry.diagnosisCodes.map(code => <li key={code}>{code} <DiagnosisDescription code={code}/></li>)}
                </ul> :
                null
            }
            <p>
                Employer name: {entry.employerName}<br/>
                {entry.sickLeave ? <span>sick leave: {entry.sickLeave.startDate} - {entry.sickLeave.endDate}</span> : null}
            </p>
        </Segment>
    )
}

export default Occupational;