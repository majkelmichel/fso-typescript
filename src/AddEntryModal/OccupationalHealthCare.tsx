import React from "react";
import {OccupationalHealthCareEntry} from "../types";
import {Field, Form, Formik} from "formik";
import {DiagnosisSelection, TextField} from "../AddPatientModal/FormField";
import {useStateValue} from "../state";
import {Button, Grid} from "semantic-ui-react";

interface Props {
    onSubmit: (values: Omit<OccupationalHealthCareEntry, 'id'>) => void;
    onCancel: () => void;
}

const OccupationalHealthCare: React.FC<Props> = ({ onSubmit, onCancel }) => {
    const [{diagnoses}] = useStateValue();
    return (
        <Formik
            initialValues={{
                description: "",
                date: "",
                specialist: "",
                type: "OccupationalHealthcare",
                employerName: ""
            }}
            onSubmit={onSubmit}
            validate={values => {
                const requiredError = "Field is required";
                const errors: { [field: string]: string } = {};
                if (!values.description) {
                    errors.description = requiredError;
                }
                if (!values.date || isNaN(Date.parse(values.date))) {
                    errors.date = "Date is malformatted or missing";
                }
                if (!values.specialist) {
                    errors.specialist = requiredError;
                }
                if (!values.employerName) {
                    errors.employerName = requiredError;
                }
                return errors;
            }}
        >
            {({isValid, dirty, setFieldTouched, setFieldValue}) => {
                return (
                    <Form className='form ui'>
                        <Field
                            label='Description'
                            placeholder='Description'
                            name='description'
                            component={TextField}
                        />
                        <Field
                            label='Date'
                            placeholder='YYYY-MM-DD'
                            name='date'
                            component={TextField}
                        />
                        <Field
                            label="Specialist"
                            placeholder="specialist"
                            name='specialist'
                            component={TextField}
                        />
                        <DiagnosisSelection
                            diagnoses={diagnoses}
                            setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                        />
                        <Field
                            label="Employer name"
                            placeholder="Employer name"
                            name='employerName'
                            component={TextField}
                        />
                        <Field
                            label='Sick Leave Start Date'
                            placeholder="YYYY-MM-DD"
                            name='sickLeave.startDate'
                            component={TextField}
                        />
                        <Field
                            label='Sick Leave End Date'
                            placeholder="YYYY-MM-DD"
                            name='sickLeave.endDate'
                            component={TextField}
                        />
                        <Grid>
                            <Grid.Column floated="left" width={5}>
                                <Button type="button" onClick={onCancel} color="red">
                                    Cancel
                                </Button>
                            </Grid.Column>
                            <Grid.Column floated="right" width={5}>
                                <Button
                                    type="submit"
                                    floated="right"
                                    color="green"
                                    disabled={!dirty || !isValid}
                                >
                                    Add
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default OccupationalHealthCare;