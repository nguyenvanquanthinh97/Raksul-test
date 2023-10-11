import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import { errorHandler, NotFoundError } from "@thinhvqnguyen-tickets/common";

import { createSmartphone } from "./routes/smartphone";
import { createModel } from "./routes/model";
import { createManufacturer } from "./routes/manufacturer";

const app = express();
app.set("trust proxy", true); // Trust the nginx ingress proxy
app.use(bodyParser.json());

app.use("/api/smartphones", createSmartphone);
app.use("/api/models", createModel);
app.use("/api/manufacturers", createManufacturer);

app.use("/", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
