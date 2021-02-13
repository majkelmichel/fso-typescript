import React from "react";
import {HealthCheckEntry, HealthCheckRating} from "../types";
import {Icon, Segment} from "semantic-ui-react";
import DiagnosisDescription from "./DiagnosisDescription";

interface Props {
    entry: HealthCheckEntry;
}

const HealthCheck: React.FC<Props> = ({ entry }) => {
    let rating: 'green' | 'olive' | 'orange' | 'red' = 'green';
    switch (entry.healthCheckRating) {
        case HealthCheckRating.Healthy:
            rating = 'green';
            break;
        case HealthCheckRating.LowRisk:
            rating = 'olive';
            break;
        case HealthCheckRating.HighRisk:
            rating = 'orange';
            break;
        case HealthCheckRating.CriticalRisk:
            rating = 'red';
    }
    return (
        <Segment>
            <h3>{entry.date} <Icon name='calendar check outline'/></h3>
            <p>{entry.description}</p>
            {entry.diagnosisCodes ?
                <ul>
                    {entry.diagnosisCodes.map(code => <li key={code}>{code} <DiagnosisDescription code={code}/></li>)}
                </ul> :
                null
            }
            <Icon name='heart' color={rating}/>
        </Segment>
    )
}

export default HealthCheck;