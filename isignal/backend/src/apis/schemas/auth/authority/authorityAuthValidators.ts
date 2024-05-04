import { loginSchema, LoginInput } from "./authorityAuthTypes";

const validateLoginData = (data: LoginInput) => {
  try {
    const validatedData = loginSchema.parse(data);
    return validatedData;
  } catch (error) {
    throw new Error(`Validation failed: ${(error as any).message}`);
  }
};

export default { validateLoginData };
