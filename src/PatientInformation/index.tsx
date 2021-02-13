import React, {Dispatch} from "react";
import {Patient} from "../types";
import {Icon} from "semantic-ui-react";
import {useParams, useRouteMatch} from "react-router-dom";
import axios from "axios";
import {apiBaseUrl} from "../constants";
import {Action, State, updatePatient} from "../state";
import Entries from "./Entries";

interface Props {
    dispatch: Dispatch<Action>;
    state: State;
}

interface MatchParams {
    id: string;
}

const PatientInformation: React.FC<Props> = (props) => {
    const [visited, setVisited] = React.useState<Array<string>>([]);
    const {id} = useParams<{ id: string }>();
    React.useEffect(() => {
        const fetchPatient = async () => {
            try {
                const {data: patientInfo} = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);

                props.dispatch(updatePatient(patientInfo));
            } catch (e) {
                console.error(e);
            }
        };
        if (!visited.includes(id)) {
            fetchPatient();
            setVisited([...visited, id]);
        }
    }, [visited, id, props.dispatch, props]);

    const match = useRouteMatch<MatchParams>('/:id');
    const patient = match ?
        props.state.patients[match.params.id] :
        null;

    if (!patient) {
        return null;
    }

    const genderIcon = patient.gender === 'male' ? 'mars' : patient.gender === 'female' ? 'venus' : 'other gender';

    return (
        <div>
            <h2>{patient.name} <Icon name={genderIcon}/></h2>
            <div>ssn: {patient.ssn}</div>
            <div>occupation: {patient.occupation}</div>
            {patient.entries.length ?
                <Entries entries={patient.entries} id={id}/> :
                null
            }
        </div>
    );
};

export default PatientInformation;