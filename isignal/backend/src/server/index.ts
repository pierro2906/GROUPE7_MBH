import colorTxt from "ansi-colors";
import { format } from "date-fns";

import pkg from "@packagejson";
import server from "@server/httpServer";
import db from "@database/dbCheck";
import logEvents from "@utils/logger/loggerUtil";

const startup = async (silent: boolean) => {
  if (!silent) {
    const dateTime = format(new Date(), "yyyy:MM:dd\tHH:mm:ss");

    /* eslint-disable no-console */

    console.log(
      colorTxt.bgBlackBright.yellow(`\n Starting ${pkg.name.toUpperCase()} `) +
        colorTxt.bgGreen.white(` v${pkg.version} `)
    );
    console.log(
      colorTxt.bold.blue(`-> Running in ${process.env.NODE_ENV} environment`)
    );
    console.log(colorTxt.blue(`-> Started at ${dateTime}`));
    /* eslint-enable no-console */
  }

  await runServer(silent);
  await checkDatabase(silent);
};

const runServer = async (silent: boolean) => {
  await server(silent);
};

const checkDatabase = async (silent: boolean) => {
  const res = await db.checkConnection();

  /* eslint-disable no-console */
  if (res.success) {
    if (!silent) console.log(colorTxt.white(`-> Connected on database`));
  } else {
    if (!silent)
      console.log(colorTxt.red(`-> Unable to connect to the database`));
    logEvents(`Unable to connect to the database: ${res.error}`);
  }
  /* eslint-enable no-console */
};

export default startup;
