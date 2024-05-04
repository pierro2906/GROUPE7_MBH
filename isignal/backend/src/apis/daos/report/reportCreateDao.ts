import { IncidentCreateDataType } from "@apis/schemas/report/reportTypes";
import prisma from "@database/dbClient";
import { ReportType } from "@prisma/client";

// TODO: Générer le code de l'incident de facon auto
const createIncident = async (data: IncidentCreateDataType): Promise<any> => {
  return await prisma.report.create({
    data: {
      title: data.title,
      description: data.description,
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.address,
      type: ReportType.INCIDENT,
      code: "CODE INCIDENT",
      sourceId: data.sourceId,
      categoryId: data.categoryId,
    },
  });
};

export default { createIncident };
