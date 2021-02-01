import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import {CoursePart} from "./types";
import Total from "./components/Total";

const App: React.FC = () => {
    const courseName = "Half Stack application development";
    const courseParts: Array<CoursePart> = [
        {
            name: "Fundamentals",
            exerciseCount: 10
        },
        {
            name: "Using props to pass data",
            exerciseCount: 7
        },
        {
            name: "Deeper type usage",
            exerciseCount: 14
        }
    ];

    return (
        <div>
            <Header name={courseName}/>
            <Content courseParts={courseParts}/>
            <Total totalExercises={courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));