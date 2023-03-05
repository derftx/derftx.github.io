"use strict";

import { log } from "./logger.js";

export const server = (req, res) => {
  const { headers, method, url } = req;

  log.info(headers, `${method} - ${url}`);

  res.setHeader("content-type", "application/json");
  res.write(JSON.stringify({ runtime: "Node.js" }));
  res.end();
};
