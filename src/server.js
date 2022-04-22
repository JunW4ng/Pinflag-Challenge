import express from "express";

import "./config/environment.js";
import routes from "./routes/index.js";
import "./models/index.js";

import swaggerUi from "swagger-ui-express";

// JSON loader
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDocument = require("../swagger/swagger.json");

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use("/", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const startServer = () => {
  app.listen(port, () => {
    console.log(`API running on http://127.0.0.1:${port}/`);
  });
};

startServer();
