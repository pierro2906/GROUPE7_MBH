import { v4 as uuid } from "uuid";
import { generateFile } from "@utils/files/filesUtil";

const logEvents = async (
  message: string,
  logsFileName: string = "errorLog.log"
): Promise<void> => {
  const dateTime = new Date().toISOString().replace("T", "\t").replace("Z", "");
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  await generateFile("/logs", logsFileName, logItem);
};

export default logEvents;
