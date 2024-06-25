import * as fs from 'fs';
import * as path from 'path';

export const readCSV = (fileName: string): Promise<number[]> => {
    return new Promise((resolve, reject) => {
        const filePath = path.resolve(__dirname, '..', 'data', fileName);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }

            const numbers = data.split('\n')
                .map(line => line.trim())
                .filter(line => line)
                .map(Number);

            if (numbers.some(isNaN)) {
                return reject(new Error('CSV file contains invalid numbers'));
            }

            resolve(numbers);
        });
    });
}
