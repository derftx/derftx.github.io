"use strict";

import pino from "pino";

export const logger = pino({
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
  level: process.env.LOG_LEVEL || "debug",
});
