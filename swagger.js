import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'My API',
        description: 'API Documnetation'
    },
    host: 'localhost:3030',
    schemas: ['http', 'https'],
    definitions: {
        // Contact: {
        //     ****** CHANGE THIS WHEN BEGIN WORKING ON NEW PROJECT *****
        // }
    }
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen()(outputFile, routes, doc);