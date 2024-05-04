import { IEnvConfig, IProcessEnv } from "./types";

const testConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.APP_URL_HOST ?? "localhost",
      port: (env.APP_URL_PORT && parseInt(env.APP_URL_PORT, 10)) || 10030,
    },
    ssl: {
      isHttps: env.SSL_ALLOW == "true" || false,
      privateKey: env.SSL_PRIVATE_KEY ?? "",
      certificate: env.SSL_CERTIFICATE ?? "",
    },
    api: {
      prefix: env.API_PREFIX ?? "api",
      version: env.API_VERSION ?? "v1",
      jsonLimit: env.API_JSON_LIMIT ?? "5mb",
      extUrlencoded: env.API_EXT_URLENCODED == "false" || true,
    },
    cors: {
      allowOrigins: parseAllowedOrigins(),
    },
    jwt: {
      secretUser: env.JWT_SECRET_USER ?? "",
      secretAdmin: env.JWT_SECRET_ADMIN ?? "",
      secretApp: env.JWT_SECRET_APP ?? "",
      expiredIn: env.JWT_EXPIRED_IN ?? "5s",
      refreshExpiresIn: env.JWT_REFRSH_EXPIRED_IN ?? "1d",
      refreshToken: env.JWT_REFRESH_TOKEN_SECRET ?? "",
      aceessToken: env.JWT_ACCESS_TOKEN_SECRET ?? "",
      mobileExpiredIn: env.JWT_MOBILE_EXPIRED_IN ?? "30d",
    },
    otp: {
      expiredIn: env.OTP_EXPIRED_IN ?? "3min",
      hashSecret: env.OTP_HASH_SECRET ?? "",
    },
    bcrypt: {
      saltRounds: parseInt(env.BCRYPT_SALTROUNDS ?? "") ?? 10,
    },
    pwd: {
      pwdLength: parseInt(env.PWD_LENGTH ?? "") ?? 8,
    },
    ratelimiter: {
      max: env.RATE_LIMIT_MAX ?? "100",
      window: env.RATE_LIMIT_WINDOW ?? "15",
    },
    debug: {
      http_request: env.DEBUG_HTTP_REQUEST == "true" || true,
      http_connection: env.DEBUG_HTTP_CONNECTION == "true" || false,
    },
  };
};

const devConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.APP_URL_HOST ?? "localhost",
      port: (env.APP_URL_PORT && parseInt(env.APP_URL_PORT, 10)) || 10_030,
    },
    pwd: {
      pwdLength: parseInt(env.PWD_LENGTH ?? "") ?? 8,
    },
    ssl: {
      isHttps: env.SSL_ALLOW == "true" || false,
      privateKey: env.SSL_PRIVATE_KEY ?? "",
      certificate: env.SSL_CERTIFICATE ?? "",
    },
    api: {
      prefix: env.API_PREFIX ?? "api",
      version: env.API_VERSION ?? "v1",
      jsonLimit: env.API_JSON_LIMIT ?? "5mb",
      extUrlencoded: env.API_EXT_URLENCODED == "false" || true,
    },
    cors: {
      allowOrigins: parseAllowedOrigins(),
    },
    jwt: {
      secretUser: env.JWT_SECRET_USER ?? "",
      secretAdmin: env.JWT_SECRET_ADMIN ?? "",
      secretApp: env.JWT_SECRET_APP ?? "",
      expiredIn: env.JWT_EXPIRED_IN ?? "24h",
      refreshToken: env.JWT_REFRESH_TOKEN_SECRET ?? "",
      refreshExpiresIn: env.JWT_REFRSH_EXPIRED_IN ?? "1d",

      aceessToken: env.JWT_ACCESS_TOKEN_SECRET ?? "",
      mobileExpiredIn: env.JWT_MOBILE_EXPIRED_IN ?? "30d",
    },
    otp: {
      expiredIn: env.OTP_EXPIRED_IN ?? "3min",
      hashSecret: env.OTP_HASH_SECRET ?? "",
    },
    bcrypt: {
      saltRounds: parseInt(env.BCRYPT_SALTROUNDS ?? "") ?? 10,
    },
    ratelimiter: {
      max: env.RATE_LIMIT_MAX ?? "100",
      window: env.RATE_LIMIT_WINDOW ?? "15",
    },
    debug: {
      http_request: env.DEBUG_HTTP_REQUEST == "true" || true,
      http_connection: env.DEBUG_HTTP_CONNECTION == "true" || false,
    },
  };
};

const stageConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.APP_URL_HOST ?? "localhost",
      port: (env.APP_URL_PORT && parseInt(env.APP_URL_PORT, 10)) || 10030,
    },
    otp: {
      expiredIn: env.OTP_EXPIRED_IN ?? "3min",
      hashSecret: env.OTP_HASH_SECRET ?? "",
    },
    pwd: {
      pwdLength: parseInt(env.PWD_LENGTH ?? "") ?? 8,
    },
    ssl: {
      isHttps: env.SSL_ALLOW == "true" || false,
      privateKey: env.SSL_PRIVATE_KEY ?? "",
      certificate: env.SSL_CERTIFICATE ?? "",
    },
    api: {
      prefix: env.API_PREFIX ?? "api",
      version: env.API_VERSION ?? "v1",
      jsonLimit: env.API_JSON_LIMIT ?? "5mb",
      extUrlencoded: env.API_EXT_URLENCODED == "false" || true,
    },
    cors: {
      allowOrigins: parseAllowedOrigins(),
    },
    jwt: {
      secretUser: env.JWT_SECRET_USER ?? "",
      secretAdmin: env.JWT_SECRET_ADMIN ?? "",
      secretApp: env.JWT_SECRET_APP ?? "",
      expiredIn: env.JWT_EXPIRED_IN ?? "24h",
      refreshExpiresIn: env.JWT_REFRSH_EXPIRED_IN ?? "1d",

      refreshToken: env.JWT_REFRESH_TOKEN_SECRET ?? "",
      aceessToken: env.JWT_ACCESS_TOKEN_SECRET ?? "",
      mobileExpiredIn: env.JWT_MOBILE_EXPIRED_IN ?? "30d",
    },
    bcrypt: {
      saltRounds: parseInt(env.BCRYPT_SALTROUNDS ?? "") ?? 10,
    },
    ratelimiter: {
      max: env.RATE_LIMIT_MAX ?? "100",
      window: env.RATE_LIMIT_WINDOW ?? "15",
    },
    debug: {
      http_request: env.DEBUG_HTTP_REQUEST == "true" || false,
      http_connection: env.DEBUG_HTTP_CONNECTION == "true" || false,
    },
  };
};

const prodConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.APP_URL_HOST ?? "localhost",
      port: (env.APP_URL_PORT && parseInt(env.APP_URL_PORT, 10)) || 10030,
    },
    pwd: {
      pwdLength: parseInt(env.PWD_LENGTH ?? "") ?? 8,
    },
    ssl: {
      isHttps: env.SSL_ALLOW == "true" || false,
      privateKey: env.SSL_PRIVATE_KEY ?? "",
      certificate: env.SSL_CERTIFICATE ?? "",
    },
    api: {
      prefix: env.API_PREFIX ?? "api",
      version: env.API_VERSION ?? "v1",
      jsonLimit: env.API_JSON_LIMIT ?? "5mb",
      extUrlencoded: env.API_EXT_URLENCODED == "false" || true,
    },
    cors: {
      allowOrigins: parseAllowedOrigins(),
    },
    jwt: {
      secretUser: env.JWT_SECRET_USER ?? "",
      secretAdmin: env.JWT_SECRET_ADMIN ?? "",
      secretApp: env.JWT_SECRET_APP ?? "",
      expiredIn: env.JWT_EXPIRED_IN ?? "24h",
      refreshExpiresIn: env.JWT_REFRSH_EXPIRED_IN ?? "1d",

      refreshToken: env.JWT_REFRESH_TOKEN_SECRET ?? "",
      aceessToken: env.JWT_ACCESS_TOKEN_SECRET ?? "",
      mobileExpiredIn: env.JWT_MOBILE_EXPIRED_IN ?? "30d",
    },
    otp: {
      expiredIn: env.OTP_EXPIRED_IN ?? "3min",
      hashSecret: env.OTP_HASH_SECRET ?? "",
    },
    bcrypt: {
      saltRounds: parseInt(env.BCRYPT_SALTROUNDS ?? "") ?? 10,
    },
    ratelimiter: {
      max: env.RATE_LIMIT_MAX ?? "100",
      window: env.RATE_LIMIT_WINDOW ?? "15",
    },
    debug: {
      http_request: env.DEBUG_HTTP_REQUEST == "true" || false,
      http_connection: env.DEBUG_HTTP_CONNECTION == "true" || false,
    },
  };
};

export function parseAllowedOrigins() {
  try {
    const array = JSON.parse(process.env.CORS_ALLOW_ORIGINS as string);
    if (Array.isArray(array)) {
      return array;
    } else {
      throw new Error("La chaîne JSON ne représente pas un tableau valide.");
    }
  } catch (error) {
    console.error(
      "Erreur lors du parsing de CORS_ALLOW_ORIGINS :",
      (error as any).message
    );

    return ["*"]; // Retourne une valeur par défaut si le parsing échoue
  }
}
export default { testConfig, devConfig, stageConfig, prodConfig };
