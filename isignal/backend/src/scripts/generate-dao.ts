import { program } from "commander";
import { generateFile } from "@utils/files/filesUtil";
program
  .version("0.1.0")
  .description("Script to generate model dao files")
  .arguments("<modelName>")
  .action(async (modelName: string) => {
    const modelDaoFilesContent = `
import prisma from "@database/dbClient";




export default {}
`;
    const daoDirName = modelName.toLowerCase();

    const daoDirPath = "src/apis/daos/" + modelName.toLowerCase();
    await generateFile(daoDirPath, ".gitignore", "");

    const daoFiles = [
      "ReadDao.ts",
      "CreateDao.ts",
      "DeleteDao.ts",
      "UpdateDao.ts",
    ];
    for (const daoFile of daoFiles) {
      const daoFileName = daoDirName + daoFile;
      await generateFile(daoDirPath, daoFileName, modelDaoFilesContent);
    }
  });
program.parse(process.argv);
