"use strict";

import pino from "pino";

export const log = pino({
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
  level: process.env.LOG_LEVEL || "debug",
});
