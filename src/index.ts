import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import "./controllers/login.controller";
import "./controllers/root.controller";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["dndndb"]
  })
);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
