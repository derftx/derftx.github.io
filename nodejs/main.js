"use strict";

import { createServer } from "node:http";
import { log } from "./src/logger.js";
import { server } from "./src/server.js";

const HTTP_PORT = process.env.HTTP_PORT || 3000;

process.on("uncaughtException", (err) => {
  //log.logger.error(err);
});

process.on("unhandledRejection", (err) => {
  //log.logger.error(err);
});

createServer(server).listen(HTTP_PORT, () => {
  //log.logger.info(`server running at [:${HTTP_PORT}]`);
});
