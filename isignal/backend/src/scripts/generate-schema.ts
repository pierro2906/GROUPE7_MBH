import { program } from "commander";
import { generateFile } from "@utils/files/filesUtil";
program
  .version("0.1.0")
  .description("Script to generate model schema files")
  .arguments("<modelName>")
  .action(async (modelName: string) => {
    modelName = modelName.toLowerCase();

    const schemaDirPath = "src/apis/schemas/" + modelName.toLowerCase();
    await generateFile(schemaDirPath, ".gitignore", "");

    const schemaFiles = ["Types.ts", "Validators.ts"];
    for (const schemaFile of schemaFiles) {
      const schemaFileName = modelName + schemaFile;
      const modelschemaFilesContent =
        schemaFile === "Types.ts"
          ? `import { z } from "zod";`
          : "export default{}";
      await generateFile(
        schemaDirPath,
        schemaFileName,
        modelschemaFilesContent
      );
    }
  });
program.parse(process.argv);
