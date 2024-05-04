import reportCreateDao from "@apis/daos/report/reportCreateDao";
import { IncidentCreateDataType } from "@apis/schemas/report/reportTypes";
import reportValidators from "@apis/schemas/report/reportValidators";

export default class ReportService {
  // write your static methods here
  // TODO: Check the code after
  public static readonly reportIcident = async (
    data: IncidentCreateDataType
  ): Promise<any> => {
    try {
      const cleanData = reportValidators.validateIncidentCreation(data);
      // TODO: add socket io here
      return await reportCreateDao.createIncident(cleanData);
    } catch (error) {
      throw new Error("Incident report error" + (error as any).message);
    }
  };
}
