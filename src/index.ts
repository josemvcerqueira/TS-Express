import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import loginRouter from "./routes/login.routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(loginRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
