import { readCSV } from './fileHandler';
import { calculate } from './calculator';

const [,, fileName, operation] = process.argv;

if (!fileName || !operation) {
    console.error('Usage: calc <file> <operation (+ or *)>');
    process.exit(1);
}

readCSV(fileName)
    .then(numbers => {
        const result = calculate(numbers, operation);
        console.log(result.output);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });
