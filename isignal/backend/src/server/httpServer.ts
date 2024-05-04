import http from "http";
import fs from "fs";

import https from "https";
import colorTxt from "ansi-colors";
import app from "@server/appServer";

import config from "@config/app";
import logEvents from "@utils/logger/loggerUtil";
export default async (silent: boolean) => {
  const serverHost = config.app.host;
  const serverPort = config.app.port;

  let serverConnections: any = [];

  const server = createServer(app());

  server.listen(serverPort);

  server.on("listening", () => onListening(serverHost, serverPort, silent));

  server.on("error", (error) =>
    onError(error, serverHost, serverPort, server, serverConnections)
  );

  server.on("connection", (connection: any) => {
    serverConnections.push(connection);

    connection.on("close", () => {
      serverConnections = serverConnections.filter(
        (curr: any) => curr !== connection
      );
    });
  });
  if (config.debug.http_connection) getConnections(server);

  process.on("SIGTERM", () => shutDown(server, serverConnections));
  process.on("SIGINT", () => shutDown(server, serverConnections));

  return server;
};

const createServer = (app: any) => {
  let options;

  if (config.ssl.isHttps && config.isProd) {
    try {
      options = {
        key: fs.readFileSync(`${config.ssl.privateKey}`),
        cert: fs.readFileSync(`${config.ssl.certificate}`),
      };
    } catch (err) {
      process.exit(0);
    }
    return https.createServer(options, app);
  } else {
    return http.createServer(app);
  }
};

const onListening = (host: string, port: number, silent: boolean) => {
  if (!silent) {
    /* eslint-disable no-console */
    if (config.ssl.isHttps && config.isProd) {
      console.log(
        colorTxt.white(`-> Listening on https://${host}:${port} (SSL)`)
        /* eslint-enable no-console */
      );
    } else {
      console.log(
        colorTxt.white(`-> Listening on http://${host}:${port}`)
        /* eslint-enable no-console */
      );
    }
  }
};

const onError = (
  error: any,
  host: string,
  port: number,
  server: unknown,
  connections: Array<string>
) => {
  if (error.syscall !== "listen") throw error;
  switch (error.code) {
    case "EACCES":
      /* eslint-disable no-console */
      console.log(
        `Http server error - Host ${host}:${port} requires elevated privileges (${error.code})`
      );
      /* eslint-enable no-console */
      logEvents(
        `Http server error - Host ${host}:${port} requires elevated privileges (${error.code})`
      );
      shutDown(server, connections);
      break;
    case "EADDRINUSE":
      /* eslint-disable no-console */
      console.log(
        `Http server error - Host ${host}:${port} is already in use (${error.code})`
      );
      /* eslint-enable no-console */
      logEvents(
        `Http server error - Host ${host}:${port} is already in use (${error.code})`
      );
      shutDown(server, connections);
      break;
    case "EADDRNOTAVAIL":
      /* eslint-disable no-console */
      console.log(
        `Http server error - Host ${host}:${port} not available (${error.code})`
      );
      /* eslint-enable no-console */
      logEvents(
        `Http server error - Host ${host}:${port} not available (${error.code})`
      );
      shutDown(server, connections);
      break;
    default:
      logEvents(
        `Http server error - Host ${host}:${port} not available (${error})`
      );
      throw error;
  }
};
const shutDown = (server: any, connections: any) => {
  /* eslint-disable no-console */
  console.log(
    "Http server error - Received kill signal, shutting down gracefully (SHUTDOWN)"
  );
  /* eslint-enable no-console */
  logEvents(
    "Http server error - Received kill signal, shutting down gracefully (SHUTDOWN)"
  );
  server.close(() => {
    /* eslint-disable no-console */
    console.log(
      "Http server error - Closed out remaining connections (SHUTDOWN)"
    );
    /* eslint-enable no-console */
    logEvents(
      "Http server error - Closed out remaining connections (SHUTDOWN)"
    );
    process.exit(0);
  });
  setTimeout(() => {
    /* eslint-disable no-console */
    console.log(
      "Http server error - Could not close connections in time, forcefully shutting down (SHUTDOWN)"
    );
    /* eslint-enable no-console */
    logEvents(
      "Http server error - Could not close connections in time, forcefully shutting down (SHUTDOWN)"
    );
    process.exit(1);
  }, 10000);
  connections.forEach((curr: any) => curr.end());
  setTimeout(() => connections.forEach((curr: any) => curr.destroy()), 5000);
};

const getConnections = (server: any) => {
  setInterval(
    () =>
      server.getConnections((err: any, count: any) => {
        if (err) logEvents(`Http server connections logs error. ${err}`);
        if (!err)
          /* eslint-disable no-console */
          console.log(`${count} connections currently open`);
        /* eslint-enable no-console */
      }),
    1000
  );
};
