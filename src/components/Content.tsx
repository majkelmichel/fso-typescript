import React from 'react';
import {CoursePart} from "../types";

interface ContentProps {
    courseParts: Array<CoursePart>
}

const Content: React.FC<ContentProps> = (props) => {
    return (
        <div>
            {props.courseParts.map(p => {
                return (
                    <p key={p.name}>
                        {p.name} {p.exerciseCount}
                    </p>
                )
            })}
        </div>
    )
}

export default Content;