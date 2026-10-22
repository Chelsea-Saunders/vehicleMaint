const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Vehicle Maintenance API',
        description: 'API for vehicles and maintenance records'
    },
    host: 'vehiclemaint.onrender.com',
    schemes: ['https', 'http'],
    definitions: { 
        Vehicles: {
            title: 'Vin',
            brand: 'Toyota', 
            vin: '123456789asd', 
            color: 'Blue', 
            year: 2020, 
            mileage: 56981
        },
        MaintenanceRecord: {
            vin: '123456789asd',
            oil_change: '2026-01-15',
            tire_pressure: 35,
            tire_rotation: '2026-01-15',
            tranny_flush: '2026-01-15',
            sparkplugs: '2026-01-15',
            coolant: '2026-01-15',
            wiper_fluid: 'full',
            light_check: '2026-01-15',
            air_filter: '2026-01-15',
            fuel_filter: '2026-01-15',
            brakes: '2026-01-15',
            belts_hoses:'2026-01-15',
            steering_suspension: '2026-01-15',
            exhaust: '2026-01-15'
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);