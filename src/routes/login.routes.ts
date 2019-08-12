import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(email + password);
});

export default router;
