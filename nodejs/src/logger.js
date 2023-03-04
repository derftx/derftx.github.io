"use strict";

// import { pinoHttp } from "pino-http";

// export const log = pinoHttp({
//   logger: {
//     formatters: {
//       level: (label) => {
//         return { level: label };
//       },
//     },
//     level: process.env.LOG_LEVEL || "debug",
//   },
// });

import { pinoHttp } from "pino-http";

export const log = pinoHttp();
