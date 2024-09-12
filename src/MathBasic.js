const MathBasic = {
    _validateArgs: function (args, expectedArgsCount) {
        if (args.length !== expectedArgsCount) {
            throw new Error(`Error: At least two numbers are required`);
        }

        for (const arg of args) {
            if (typeof arg !== 'number') {
                throw new Error('Error: All parameters should be numbers');
            }
        }

        return args;
    },

    add: function (...args) {
        this._validateArgs(args, 2);
        return args.reduce((acc, curr) => acc + curr, 0);
    },

    subtract: function (...args) {
        const [a, b] = this._validateArgs(args, 2);
        return a - b;
    },

    multiply: function (...args) {
        const [a, b] = this._validateArgs(args, 2);
        return a * b;
    },

    divide: function (...args) {
        const [a, b] = this._validateArgs(args, 2);
        if (b === 0) {
            throw new Error('Error: Division by zero is not allowed');
        }
        return a / b;
    },
};

module.exports = MathBasic;
