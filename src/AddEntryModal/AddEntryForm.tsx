import React, {useState} from "react";
import {Select} from "semantic-ui-react";
import {Entry, EntryFormValues} from "../types";
import {typeOptions} from "../constants";
import HealthCheck from "./HealthCheck";
import Hospital from "./Hospital";
import OccupationalHealthCare from "./OccupationalHealthCare";

interface Props {
    onSubmit: (values: Omit<Entry, 'id'>) => void;
    onCancel: () => void;
}

const AddEntryForm: React.FC<Props> = ({onSubmit, onCancel}) => {
    const [type, setType] = useState<EntryFormValues['type']>("HealthCheck");
    return (
        <div>
            <Select options={typeOptions} defaultValue={type} onChange={(e, {value}) => {
                if (value === "HealthCheck" || value === "Hospital" || value === "OccupationalHealthcare") {
                    setType(value)
                }
            }} placeholder={'Select Type'}/>
            {type === "HealthCheck" ? <HealthCheck onSubmit={onSubmit} onCancel={onCancel}/> : null}
            {type === "Hospital" ? <Hospital onSubmit={onSubmit} onCancel={onCancel}/> : null}
            {type === "OccupationalHealthcare" ? <OccupationalHealthCare onSubmit={onSubmit} onCancel={onCancel}/> : null}
        </div>
    )
}

export default AddEntryForm;