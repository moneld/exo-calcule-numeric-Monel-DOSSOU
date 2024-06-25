export const calculate = (numbers: number[], operation: string): { output: string, total: number } => {
    if (operation !== '+' && operation !== '*') {
        throw new Error('Operation must be + or *');
    }

    let total = operation === '+' ? 0 : 1;
    let output = '';

    numbers.forEach((num, index) => {
        if (index === 0) {
            total = operation === '+' ? num : total * num;
            output += `\n${num}`;
        } else {
            output += `\n${operation}${num} (=`;
            total = operation === '+' ? total + num : total * num;
            output += `${total})`;
        }
    });

    output += `\n-------\ntotal = ${total} (${operation === '+' ? 'addition' : 'multiplication'})`;

    return { output, total };
}
