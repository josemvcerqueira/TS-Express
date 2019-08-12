import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import loginRouter from "./routes/login.route";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["dndndb"]
  })
);
app.use(loginRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
