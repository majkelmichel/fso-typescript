import React from "react";
import {CoursePart} from "../index";

interface PartProps {
    part: CoursePart
}

const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const Part: React.FC<PartProps> = (props) => {
    switch (props.part.name) {
        case "Fundamentals":
            return (
                <p>
                    {props.part.name} {props.part.description} {props.part.exerciseCount}
                </p>
            );
        case "Deeper type usage":
            return (
                <p>
                    {props.part.name}
                    {props.part.exerciseCount}
                    {props.part.description}
                    {props.part.exerciseSubmissionLink}
                </p>
            )
        case "Using props to pass data":
            return (
                <p>
                    {props.part.name} {props.part.exerciseCount} {props.part.groupProjectCount}
                </p>
            )
        case "Props in React.ts":
            return (
                <p>
                    {props.part.name} {props.part.exerciseCount} {props.part.description} {props.part.tag}
                </p>
            )
        default:
            return assertNever(props.part);
    }
};

export default Part;