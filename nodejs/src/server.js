"use strict";

import { logger } from "./logger.js";

export const server = (req, res) => {
  const { method, url } = req;

  logger.info({ method, url });

  res.setHeader("content-type", "application/json");
  res.write(JSON.stringify({ runtime: "Node.js" }));
  res.end();
};
