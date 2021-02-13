import React, {useState} from 'react';
import {Entry, EntryFormValues} from "../types";
import DiagnosisDescription from "./DiagnosisDescription";
import EntryDetails from "./EntryDetails";
import {Button} from "semantic-ui-react";
import AddEntryModal from "../AddEntryModal";
import axios from 'axios';
import {apiBaseUrl} from "../constants";
import {addEntry, useStateValue} from "../state";

interface Props {
    entries: Entry[];
    id: string;
}

const Entries: React.FC<Props> = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = React.useState<string | undefined>();
    const [{ patients }, dispatch] = useStateValue();


    const openModal = (): void => setModalOpen(true);
    const closeModal = (): void => {
        setModalOpen(false);
        setError(undefined);
    };

    const submitEntry = async (values: EntryFormValues) => {
        try {
            const {data: newEntry} = await axios.post(
                `${apiBaseUrl}/patients/${props.id}`,
                values
            );
            dispatch(addEntry(newEntry, props.id));
            closeModal();
        } catch (e) {
            console.error(e.response.data);
            setError(e.response.data.error);
        }
    }

    return (
        <div>
            <h3>entries</h3>
            <AddEntryModal modalOpen={modalOpen} onClose={closeModal} onSubmit={submitEntry}/>
            <Button onClick={() => openModal()}>
                add entry
            </Button>
            {props.entries.map(en => <EntryDetails key={en.id} entry={en}/>)}
        </div>
    )
}

export default Entries;