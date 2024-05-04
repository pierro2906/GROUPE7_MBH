import { program } from "commander";
import { generateFile } from "@utils/files/filesUtil";
import { capitalizeFirstLetter } from "@utils/string/stringUtil";

program
  .version("0.1.0")
  .description("Script to generate model routes files")
  .arguments("<modelName> [version]")
  .action(async (modelName: string, version: string = "v1") => {
    modelName = modelName.toLowerCase();
    version = version.toLowerCase();

    const routesDirPath = `src/apis/routes/${version}/${modelName}`;
    await generateFile(routesDirPath, ".gitignore", "");
    const routesFiles = ["index.ts", "Routes.ts"];
    for (const routesFile of routesFiles) {
      const routesFileName =
        routesFile === "index.ts" ? routesFile : modelName + routesFile;
      const modelRoutesFilesContent =
        routesFile === "index.ts"
          ? generateRouteIndexFileContent(modelName)
          : generateRouteFileContent(modelName);
      await generateFile(
        routesDirPath,
        routesFileName,
        modelRoutesFilesContent
      );
    }

    console.log(
      `Routes generated for model '${modelName}' in version '${version}'.`
    );
  });

function generateRouteFileContent(modelName: string): string {
  const cModelName = capitalizeFirstLetter(modelName);
  return `
import express from 'express';
// import ${cModelName}Controller from '@apis/controllers/${modelName}/${cModelName}Controller';

const ${modelName}Router = express.Router();


// Define routes here

export default ${modelName}Router;
`;
}
function generateRouteIndexFileContent(modelName: string): string {
  const cModelName = capitalizeFirstLetter(modelName);
  return `
import express from "express";

import ${modelName}Router from "./${modelName}Routes";

const ${modelName}IndexRouter = express.Router();

// toutes les routes de ${modelName} contiendrons le context /${modelName}

${modelName}IndexRouter.use("/${modelName}", ${modelName}Router);
export default ${modelName}IndexRouter;
`;
}

program.parse(process.argv);
