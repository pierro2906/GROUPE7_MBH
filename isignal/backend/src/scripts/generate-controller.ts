import { program } from "commander";
import { generateFile } from "@utils/files/filesUtil";
import { capitalizeFirstLetter } from "@utils/string/stringUtil";
program
  .version("0.1.0")
  .description("Script to generate model controller file")
  .arguments("<modelName>")
  .action(async (modelName: string) => {
    modelName = modelName.toLowerCase();

    const modelControllerContent = `
import { Request, Response } from "express";

export default class ${capitalizeFirstLetter(modelName)}Controller {
  // write your static methods here

}`;
    const controllerName = modelName + "Controller.ts";

    const controllerDirPath = "src/apis/controllers/" + modelName.toLowerCase();

    await generateFile(
      controllerDirPath,
      controllerName,
      modelControllerContent
    );
  });
program.parse(process.argv);
