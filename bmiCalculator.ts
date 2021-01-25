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
    } else if (BMI > 40) {
        return 'Obese Class III (Very severely obese)';
    }
}

console.log(calculateBmi(180, 74));