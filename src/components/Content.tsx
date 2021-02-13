import React from 'react';
import Part from "./Part";
import {CoursePart} from "../index";

interface ContentProps {
    courseParts: Array<CoursePart>
}

const Content: React.FC<ContentProps> = (props) => {
    return (
        <div>
            {props.courseParts.map(p => <Part key={p.name} part={p}/>)}
        </div>
    )
}

export default Content;