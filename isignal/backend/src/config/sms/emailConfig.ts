import { IEnvConfig, IProcessEnv } from "./types";

const testConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    vonage: {
      apiKey: env.VONAGE_API_KEY ?? "",
      apiSecret: env.VONAGE_API_SECRET ?? "",
      toNumber: env.VONAGE_TO_NUMBER ?? "",
      brandName: env.VONAGE_BRAND_NAME ?? "",
    },
  };
};

const devConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    vonage: {
      apiKey: env.VONAGE_API_KEY ?? "",
      apiSecret: env.VONAGE_API_SECRET ?? "",
      toNumber: env.VONAGE_TO_NUMBER ?? "",
      brandName: env.VONAGE_BRAND_NAME ?? "",
    },
  };
};

const stageConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    vonage: {
      apiKey: env.VONAGE_API_KEY ?? "",
      apiSecret: env.VONAGE_API_SECRET ?? "",
      toNumber: env.VONAGE_TO_NUMBER ?? "",
      brandName: env.VONAGE_BRAND_NAME ?? "",
    },
  };
};

const prodConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    vonage: {
      apiKey: env.VONAGE_API_KEY ?? "",
      apiSecret: env.VONAGE_API_SECRET ?? "",
      toNumber: env.VONAGE_TO_NUMBER ?? "",
      brandName: env.VONAGE_BRAND_NAME ?? "",
    },
  };
};

export default { testConfig, devConfig, stageConfig, prodConfig };
