import {
  IncidentCreateDataSchema,
  IncidentCreateDataType,
} from "./reportTypes";
const validateIncidentCreation = (
  data: IncidentCreateDataType
): IncidentCreateDataType => {
  try {
    return IncidentCreateDataSchema.parse(data);
  } catch (error) {
    throw new Error(
      "Incident creation validation error" + (error as any).messgae
    );
  }
};
export default { validateIncidentCreation };
