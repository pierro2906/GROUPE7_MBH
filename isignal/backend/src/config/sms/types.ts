export interface IProcessEnv {
  [key: string]: string | undefined;
}

export interface IVonage {
  apiKey: string;
  apiSecret: string;
  toNumber: string;
  brandName: string;
}

export interface IBaseConfig {
  nodeEnv: string;
  isTest: boolean;
  isDev: boolean;
  isStage: boolean;
  isProd: boolean;
}

export interface IEnvConfig {
  vonage: IVonage;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
