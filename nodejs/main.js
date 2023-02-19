"use strict";

import { createServer } from "node:http";
import { server } from "./src/server.js";

const HTTP_PORT = process.env.HTTP_PORT || 3000;

createServer(server).listen(HTTP_PORT, () => {
  console.log(`server running at [:${HTTP_PORT}]`);
});
