import http from "node:http";
import { server } from "./server.js";

const HTTP_PORT = process.env.HTTP_PORT || 3000;

http.createServer(server).listen(HTTP_PORT);
