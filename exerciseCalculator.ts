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

interface ParseResultDays {
    target: number,
    daysArray: Array<number>
}

const parseArgsDays = (args: Array<string>): ParseResultDays => {
    const arr: Array<string> = args.slice(2);
    if (arr.map(num => Number(num)).some(num => isNaN(Number(num)))) {
        throw new Error('Some of the passed arguments are not numbers');
    } else {
        const target = Number(arr[0]);
        const daysArray: Array<number> = arr.slice(1).map(n => Number(n));
        return {
            target,
            daysArray
        }
    }
}

const calculateExercises = (days: Array<number>, target: number): TrainingResult => {
    const periodLength: number = days.length;
    const trainingDays: number = days.reduce((acc, cur) => {
        return acc + (cur > 0 ? 1 : 0);
    }, 0);
    const totalHours: number = days.reduce((acc, cur) => acc + cur, 0);
    const success: boolean = totalHours > target * days.length;
    const rating: Rating = totalHours > target * days.length ? totalHours * 1.5 > target * days.length ? 3 : 2 : 1;
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

try {
    const args = parseArgsDays(process.argv);
    console.log(calculateExercises(args.daysArray, args.target));
} catch (e) {
    console.log('Error, message:', e.message);
}