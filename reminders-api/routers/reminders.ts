import { Router } from "express";
import remindersBodyDto from "../dtos/reminder";

const router = Router();

router.get("/", (req, res) => {
  res.send("List of Reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as remindersBodyDto;
  res.status(201).json(title);
});

export default router;
