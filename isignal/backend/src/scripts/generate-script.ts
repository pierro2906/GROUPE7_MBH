import { program } from "commander";
import { generateFile } from "@utils/files/filesUtil";
export type ScriptDataType = {
  version: string;
  description: string;
  baseContent: string;
  dirBase: string;
  files: string[];
};
export const make = (data: ScriptDataType, action: Function) => {
  program
    .version(data.version)
    .description(data.description)
    .arguments(`<modelName>`)
    .action(async (modelName: string) => {
      const modelDaoFilesContent = data.baseContent;
      modelName = modelName.toLowerCase();

      const daoDirPath = data.dirBase + modelName.toLowerCase();

      const daoFiles = data.files;
      daoFiles.forEach((daoFile) => {
        const daoFileName = modelName + daoFile;

        generateFile(daoDirPath, daoFileName, modelDaoFilesContent);
      });
    });
  program.parse(process.argv);
};
