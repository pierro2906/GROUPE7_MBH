import { log } from "console";
import {
  GenerateCredentialInput,
  GenerateCredentialSchema,
} from "./authorityTypes";

const validateCredentialGenartion = (data: GenerateCredentialInput) => {
  try {
    // console.log(data);
    log(
      "Generation service validation fonction",
      "Je viens de la generation service"
      // validatedData
    );
    const validatedData = GenerateCredentialSchema.parse(data);

    return validatedData;
  } catch (error) {
    log(
      "Generation service validation fonction",
      "Il y a une erreur",
      (error as any).message
      // validatedData
    );
    throw new Error(`Validation failed: ${(error as any).message}`);
  }
};

export default { validateCredentialGenartion };
