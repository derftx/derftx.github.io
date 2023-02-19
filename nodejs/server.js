"use strict";

export const server = (request, response) => {
  response.setHeader("content-type", "application/json");
  response.write(JSON.stringify({ runtime: "Node.js" }));
  response.end();
};
