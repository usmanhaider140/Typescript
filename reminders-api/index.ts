import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();
app.use(express.json());
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => console.log("Server is started on 8000"));
