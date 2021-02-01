import React from "react";

interface TotalProps {
    totalExercises: number
}

const Total: React.FC<TotalProps> = (props) => {
    return (
        <p>
            Number of exercises {props.totalExercises}
        </p>
    )
}

export default Total;