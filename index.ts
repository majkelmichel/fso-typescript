import express from 'express';
import {calculateBmi, parseArgs} from "./bmiCalculator";
import {calculateExercises} from "./exerciseCalculator";

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const weight: string | undefined = typeof req.query.weight === 'string' ? req.query.weight : undefined;
    const height: string | undefined = typeof req.query.height === 'string' ? req.query.height : undefined;
    let result;
    try {
        result = parseArgs(weight, height);
    } catch (e) {
        res.send({error: 'malformatted parameters'});
        return;
    }
    const bmi = calculateBmi(result.height, result.weight);
    res.send({
        weight: result.weight,
        height: result.height,
        bmi
    });
});

app.post('/exercises', (req, res) => {
    // if (!req.body.daily_exercises || !req.body.target) {
    //     return res.status(400).send({
    //         "error": "parameters missing"
    //     });
    // }
    //
    // const dailyExercises: Array<number> = req.body.daily_exercises instanceof Array ? req.body.daily_exercises : undefined;
    // const target: number | string = typeof req.body.target === 'number' || typeof req.body.target === "string" ? req.body.target : undefined;
    //
    // if (isNaN(Number(target)) || !dailyExercises || !target) {
    //     return res.status(400).send({
    //         "error": "malformatted parameters"
    //     });
    // }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {daily_exercises: dailyExercises, target} = req.body;

    if (!dailyExercises || !target) {
        return res.status(400).send({
            error: "parameters missing"
        });
    }

    if (!(typeof target === 'number' || typeof target === 'string') || !(dailyExercises instanceof Array) || isNaN(Number(target))) {
        return res.status(400).send({
            "error": "malformatted parameters"
        });
    }

    const result = calculateExercises(dailyExercises, Number(target));

    return res.send({
        ...result
    });
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});