import http from "http";
import express from "express";

import { name, version } from "../package.json";
console.log(`starting ${name} v${version}`);

const app = express();

app.use(express.static("/usr/app/src/client/build"));

app.get("*", (req, res) =>
  res.sendFile("/usr/app/src/client/build/index.html")
);

http.createServer(app).listen(80);
