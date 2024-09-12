const MathBasic = require('./MathBasic')

describe(' A MathBasic', () => {
    it('should contains add, substract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add');
        expect(MathBasic).toHaveProperty('subtract');
        expect(MathBasic).toHaveProperty('multiply');
        expect(MathBasic).toHaveProperty('divide');
        expect(MathBasic.add).toBeInstanceOf(Function);
        expect(MathBasic.subtract).toBeInstanceOf(Function);
        expect(MathBasic.multiply).toBeInstanceOf(Function);
        expect(MathBasic.divide).toBeInstanceOf(Function);
    });

    describe('A add function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.add()).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.add(1)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.add(1, 2, 3)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.add(1, 2, 3, 4)).toThrow('Error: At least two numbers are required');
        });

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.add('1', '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.add(1, '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.add({}, true)).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.add(null, false)).toThrow('Error: All parameters should be numbers');
        });

        it('should return the sum of two numbers', () => {
            expect(MathBasic.add(1, 2)).toEqual(3);
            expect(MathBasic.add(-1, 2)).toEqual(1);
            expect(MathBasic.add(1, -2)).toEqual(-1);
            expect(MathBasic.add(-1, -2)).toEqual(-3);
        });
    });

    describe(' A substract function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.subtract()).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.subtract(1)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.subtract(1, 2, 3)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrow('Error: At least two numbers are required');
        });

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.subtract('1', '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.subtract(undefined, '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.subtract({}, true)).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.subtract(null, false)).toThrow('Error: All parameters should be numbers');
        });

        it('should return the substract of two numbers', () => {
            expect(MathBasic.subtract(5, 3)).toEqual(2);
            expect(MathBasic.subtract(-5, 3)).toEqual(-8);
            expect(MathBasic.subtract(5, -3)).toEqual(8);
            expect(MathBasic.subtract(-5, -3)).toEqual(-2);
        });
    });

    describe('A multiply function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.multiply()).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.multiply(1)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.multiply(1, 2, 3)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrow('Error: At least two numbers are required');
        });

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.multiply('1', '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.multiply(undefined, '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.multiply({}, true)).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.multiply(null, false)).toThrow('Error: All parameters should be numbers');
        });

        it('should return the multiply of two numbers', () => {
            expect(MathBasic.multiply(2, 3)).toEqual(6);
            expect(MathBasic.multiply(-2, 3)).toEqual(-6);
            expect(MathBasic.multiply(2, -3)).toEqual(-6);
            expect(MathBasic.multiply(-2, -3)).toEqual(6);
        });
    });

    describe('A divide function', () => {
        it('should throw error when not given 2 parameters', () => {
            expect(() => MathBasic.divide()).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.divide(1)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.divide(1, 2, 3)).toThrow('Error: At least two numbers are required');
            expect(() => MathBasic.divide(1, 2, 3, 4)).toThrow('Error: At least two numbers are required');
        });

        it('should throw error when given non-numbers parameters', () => {
            expect(() => MathBasic.divide('1', '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.divide(undefined, '2')).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.divide({}, true)).toThrow('Error: All parameters should be numbers');
            expect(() => MathBasic.divide(null, false)).toThrow('Error: All parameters should be numbers');
        });

        it('should return the divide of two numbers', () => {
            expect(MathBasic.divide(6, 3)).toEqual(2);
            expect(MathBasic.divide(-6, 3)).toEqual(-2);
            expect(MathBasic.divide(6, -3)).toEqual(-2);
            expect(MathBasic.divide(-6, -3)).toEqual(2);
            expect(() => MathBasic.divide(6, 0)).toThrow('Error: Division by zero is not allowed');
            expect(() => MathBasic.divide(-6, 0)).toThrow('Error: Division by zero is not allowed');
        });
    });
})

