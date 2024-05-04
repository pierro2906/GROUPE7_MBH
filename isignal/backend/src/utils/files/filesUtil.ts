import fs from "fs";
import appRootPath from "app-root-path";
import path from "path";
import { log } from "console";
import colorTxt from "ansi-colors";

const fsPromises = fs.promises;

export const generateFile = async (
  dir: string,
  fileName: string,
  content: string
) => {
  try {
    const dirPath = appRootPath.resolve(`${dir}`);

    if (!fs.existsSync(dirPath)) {
      await fsPromises.mkdir(dirPath);
    }

    const filePath = path.join(dirPath, fileName);
    try {
      // Vérifier si le fichier existe

      await fsPromises.access(filePath);
      if (dir != "/logs") {
        log(colorTxt.bgYellow.white(`ATTENTION !!!`));

        const fileColored = colorTxt.bold.red(filePath);

        log(`Le fichier ${fileColored} existe déjà. `);
        return;
      }
      await fsPromises.appendFile(filePath, content);
    } catch (error) {
      // Le fichier n'existe pas, écrire dedans
      await fsPromises.writeFile(filePath, content);
      const fileColored = colorTxt.bold.green(fileName);
      const pathColored = colorTxt.bold.white(dirPath);

      log(
        `Le fichier \t${fileColored}\t a été créé dans le dossier \t${pathColored}/`
      );
    }
  } catch (err) {
    log(err);
  }
};
