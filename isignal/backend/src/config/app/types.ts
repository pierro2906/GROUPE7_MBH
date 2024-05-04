export interface IProcessEnv {
  [key: string]: string | undefined;
}

interface IApp {
  host: string;
  port: number;
}

interface ISsl {
  isHttps: boolean;
  privateKey: string;
  certificate: string;
}

interface IApi {
  prefix: string;
  version: string;
  jsonLimit: string;
  extUrlencoded: boolean;
}

interface IRatelimiter {
  max: string;
  window: string;
}

interface IJwt {
  secretUser: string;
  secretAdmin: string;
  secretApp: string;
  expiredIn: string;
  refreshToken: string;
  aceessToken: string;
  refreshExpiresIn: string;
  mobileExpiredIn: string;
}
interface IOtp {
  hashSecret: string;

  expiredIn: string;
}

interface ICors {
  allowOrigins: string[];
}

interface IBcrypt {
  saltRounds: number;
}

interface IDebug {
  http_request: boolean;
  http_connection: boolean;
}

export interface IBaseConfig {
  nodeEnv: string;
  isTest: boolean;
  isDev: boolean;
  isStage: boolean;
  isProd: boolean;
}

export interface Ipwd {
  pwdLength: number;
}

export interface IEnvConfig {
  app: IApp;
  ssl: ISsl;
  api: IApi;
  ratelimiter: IRatelimiter;
  jwt: IJwt;
  otp: IOtp;
  cors: ICors;
  bcrypt: IBcrypt;
  debug: IDebug;
  pwd: Ipwd;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
