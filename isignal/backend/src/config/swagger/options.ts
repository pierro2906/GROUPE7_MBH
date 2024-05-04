import swaggerJsdoc from "swagger-jsdoc";
import appRootPath from "app-root-path";
const routesDirPath = appRootPath.resolve("src/apis/routes");
const apiFiles = routesDirPath + "/**/*.ts";
// Définition de l'objet de configuration Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "I-Signal",
      version: "1.0.0",
      description: "Documentation de l'api de I-    Signal",
      contact: {
        name: "AMONA Audrey Biréwa",
        url: "https://github.com/Dreykovic",
        email: "dreybirewa@gmail.com",
      },
    },
    server: [
      {
        url: "https://development.gigantic-server.com/v1",
        description: "Development server",
      },
      {
        url: "https://staging.gigantic-server.com/v1",
        description: "Staging server",
      },
      {
        url: "https://api.gigantic-server.com/v1",
        description: "Production server",
      },
    ],
  },
  apis: [apiFiles], // Spécifie les fichiers où se trouvent les annotations JSDoc
};

// Génère la spécification Swagger
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
