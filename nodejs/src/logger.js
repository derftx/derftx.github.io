"use strict";

import pino from "pino";
import morgan from "morgan";

export const logger = pino({
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
  level: process.env.LOG_LEVEL || "debug",
});

export const loggerHttp = morgan("dev");
