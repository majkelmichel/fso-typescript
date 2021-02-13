import React from "react";
import {HospitalEntry} from "../types";
import {Field, Form, Formik} from "formik";
import {DiagnosisSelection, TextField} from "../AddPatientModal/FormField";
import {useStateValue} from "../state";
import {Button, Grid} from "semantic-ui-react";

interface Props {
    onSubmit: (values: Omit<HospitalEntry, 'id'>) => void;
    onCancel: () => void;
}

const Hospital: React.FC<Props> = ({onSubmit, onCancel}) => {
    const [{diagnoses}] = useStateValue();
    return (
        <Formik
            initialValues={{
                description: "",
                date: "",
                specialist: "",
                type: "Hospital",
                discharge: {
                    date: "",
                    criteria: ""
                },
            }}
            onSubmit={onSubmit}
            validate={values => {
                const requiredError = "Field is required";
                const errors: { [field: string]: string } = {};
                if (!values.description) {
                    errors.description = requiredError;
                }
                if (!values.date || isNaN(Date.parse(values.date))) {
                    console.log(values);
                    errors.date = "Date is malformatted or missing";
                }
                if (!values.specialist) {
                    errors.specialist = requiredError;
                }
                return errors;
            }}
        >
            {({isValid, dirty, setFieldValue, setFieldTouched}) => {
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
                            label='Discharge date'
                            placeholder="YYYY-MM-DD"
                            name='discharge.date'
                            component={TextField}
                        />
                        <Field
                            label='Discharge criteria'
                            placeholder='criteria'
                            name='discharge.criteria'
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

export default Hospital;