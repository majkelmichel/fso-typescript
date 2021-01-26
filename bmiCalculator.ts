interface ParseResult {
    weight: number,
    height: number
}

const parseArgs = (val1: string | undefined, val2: string | undefined): ParseResult => {
    const parsedVal1: number = Number(val1);
    const parsedVal2: number = Number(val2);

    if (isNaN(parsedVal1) || isNaN(parsedVal2)) {
        throw new Error('Passed arguments are not numbers!');
    } else {
        return {
            weight: parsedVal1,
            height: parsedVal2
        }
    }
}


const calculateBmi = (height: number, weight: number): string => {
    const BMI: number = weight / ((height / 100) * (height / 100));
    if (BMI <= 15) {
        return 'Very severely underweight';
    } else if (BMI > 15 && BMI <= 16) {
        return 'Severely underweight';
    } else if (BMI > 16 && BMI <= 18.5) {
        return 'Underweight';
    } else if (BMI > 18.5 && BMI <= 25) {
        return 'Normal (healthy weight)';
    } else if (BMI > 25 && BMI <= 30) {
        return 'Overweight';
    } else if (BMI > 30 && BMI <= 35) {
        return 'Obese Class I (Moderately obese)';
    } else if (BMI > 35 && BMI <= 40) {
        return 'Obese Class II (Severely obese)';
    } else {
        return 'Obese Class III (Very severely obese)';
    }
}

try {
    const values: ParseResult = parseArgs(process.argv[2], process.argv[3]);
    console.log(calculateBmi(values["weight"], values["height"]));
} catch (e) {
    console.log('Error, message:', e.message);
}

export {
    calculateBmi,
    parseArgs
}