import express from 'express';
import { calculateBmi, parseArgs } from "./bmiCalculator";

const app = express();

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

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});