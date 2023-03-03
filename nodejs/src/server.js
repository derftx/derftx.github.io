"use strict";

import { loggerHttp } from "./logger.js";

export const server = (req, res) => {
  loggerHttp(req, res, () => {
    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify({ runtime: "Node.js" }));
    res.end();
  });
};
