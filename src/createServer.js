const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic, figureCalculator }) => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    server.route([
        {
            method: 'GET',
            path: '/add/{a}/{b}',
            handler: async (request, h) => {
                const { a, b } = request.params;
                const value = mathBasic.add(Number(a), Number(b));
                return h.response({ value });
            },
        },
        {
            method: 'GET',
            path: '/subtract/{a}/{b}',
            handler: async (request, h) => {
                const { a, b } = request.params;
                const value = mathBasic.subtract(Number(a), Number(b));
                return h.response({ value });
            },
        },
        {
            method: 'GET',
            path: '/multiply/{a}/{b}',
            handler: async (request, h) => {
                const { a, b } = request.params;
                const value = mathBasic.multiply(Number(a), Number(b));
                return h.response({ value });
            },
        },
        {
            method: 'GET',
            path: '/divide/{a}/{b}',
            handler: async (request, h) => {
                const { a, b } = request.params;
                const value = mathBasic.divide(Number(a), Number(b));
                return h.response({ value });
            },
        },
        {
            method: 'GET',
            path: '/rectangle/perimeter/{length}/{width}',
            handler: async (request, h) => {
                const { length, width } = request.params;
                const value = figureCalculator.calculateRectanglePerimeter(Number(length), Number(width));
                return h.response({ value });
            },
        },
        {
            method: 'GET',
            path: '/rectangle/area/{length}/{width}',
            handler: async (request, h) => {
                const { length, width } = request.params;
                const value = figureCalculator.calculateRectangleArea(Number(length), Number(width));
                return h.response({ value });
            },
        },
        {
            method: 'GET',
            path: '/triangle/perimeter/{sideA}/{sideB}/{base}',
            handler: async (request, h) => {
                const { sideA, sideB, base } = request.params;
                const value = figureCalculator.calculateTrianglePerimeter(Number(sideA), Number(sideB), Number(base));
                return h.response({ value });
            },
        },
        {
            method: 'GET',
            path: '/triangle/area/{base}/{height}',
            handler: async (request, h) => {
                const { base, height } = request.params;
                const value = figureCalculator.calculateTriangleArea(Number(base), Number(height));
                return h.response({ value });
            },
        }
    ]);
    return server;
}

module.exports = createServer;