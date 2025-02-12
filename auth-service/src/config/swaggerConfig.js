const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Auth Service API",
            version: "1.0.0",
            description: "API documentation for the Auth Service",
        },
        servers: [
            {
                url: "http://localhost:3000", // Update if your server runs on a different port
            },
        ],
    },
    apis: ["./src/app.js"], // Path to your API documentation comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
