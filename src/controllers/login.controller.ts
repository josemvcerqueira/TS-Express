import { Request, Response } from "express";

import { get, controller, post, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
          <form method="POST">
          <div>
            <label for="email">Email</label>
            <input type="text" name="email"/>
        </div>
        <div>
        <label for="password">Password</label>
        <input type="text" name="password"/>
        </div>
          <button>Submit</button>
          </form>
  `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    }
    res.send("Invalid email or password");
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
