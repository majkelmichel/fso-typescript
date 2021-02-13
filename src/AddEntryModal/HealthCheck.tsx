import React from "react";
import {Field, Form, Formik} from "formik";
import {DiagnosisSelection, NumberField, TextField} from "../AddPatientModal/FormField";
import {Button, Grid} from "semantic-ui-react";
import {useStateValue} from "../state";
import {HealthCheckEntry} from "../types";

interface Props {
    onSubmit: (values: Omit<HealthCheckEntry, 'id'>) => void;
    onCancel: () => void;
}

const HealthCheck: React.FC<Props> = ({onSubmit, onCancel}) => {
    const [{diagnoses}] = useStateValue();
    return (
        <Formik
            initialValues={{
                description: "",
                date: "",
                specialist: "",
                type: "HealthCheck",
                healthCheckRating: 0
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
                if (!values.healthCheckRating) {
                    errors.healthCheckRating = requiredError;
                }
                return errors;
            }}
        >
            {({isValid, dirty, setFieldValue, setFieldTouched}) => {
                return (
                    <Form className="form ui">
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
                            label='Health Check Rating'
                            name='healthCheckRating'
                            component={NumberField}
                            min={0}
                            max={3}
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

export default HealthCheck;