type Rating = 1 | 2 | 3;

interface TrainingResult {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: Rating,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (days: Array<number>, target: number): TrainingResult => {
    const periodLength: number = days.length;
    const trainingDays: number = days.reduce((acc, cur) => {
        return acc + cur > 0 ? 1 : 0;
    }, 0);
    const totalHours: number = days.reduce((acc, cur) => acc + cur, 0)
    const success: boolean = totalHours > target;
    const rating: Rating = totalHours > target ? totalHours * 1.5 > target ? 3 : 2 : 1;
    const ratingDescription: string = rating === 1 ? 'you didn\'t meet the target' : rating === 2 ? 'you met the target, but could do better' : 'good job on your training';
    const average: number = totalHours / days.length;
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));