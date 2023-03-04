"use strict";

import { log } from "./logger.js";

export const server = (req, res) => {
  const { method, url } = req;

  log(req, res);

  res.setHeader("content-type", "application/json");
  res.write(JSON.stringify({ runtime: "Node.js" }));
  res.end();
};
