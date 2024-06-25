import { calculate } from '../calculator';

describe('Calculator', () => {
    test('addition', () => {
        const numbers = [1, 2, 3];
        const result = calculate(numbers, '+');
        expect(result.total).toBe(6);
        expect(result.output).toContain('total = 6 (addition)');
    });

    test('multiplication', () => {
        const numbers = [1, 2, 3];
        const result = calculate(numbers, '*');
        expect(result.total).toBe(6);
        expect(result.output).toContain('total = 6 (multiplication)');
    });

    test('invalid operation', () => {
        expect(() => calculate([1, 2, 3], '-')).toThrow('Operation must be + or *');
    });
});
