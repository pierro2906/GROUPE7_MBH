import { program } from "commander";
import { generateFile } from "@utils/files/filesUtil";
import { capitalizeFirstLetter } from "@utils/string/stringUtil";
program
  .version("0.1.0")
  .description("Script to generate model service file")
  .arguments("<modelName>")
  .action(async (modelName: string) => {
    modelName = modelName.toLowerCase();

    const modelServiceContent = `
export default class  ${capitalizeFirstLetter(modelName)}Service {
  // write your static methods here

}`;
    const serviceName = modelName + "Service.ts";

    const serviceDirPath = "src/apis/services/" + modelName.toLowerCase();

    await generateFile(serviceDirPath, serviceName, modelServiceContent);
  });
program.parse(process.argv);
