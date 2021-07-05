import express from "express";
import { addTask, getTask, updateTask, deleteTask } from "../controller/taskReminderController.js";
import auth  from "../middleware/auth.js";

const router = express.Router();

router.post("/task", auth, addTask);
router.get("/task", auth, getTask);
router.patch("/task/:id", auth, updateTask);
router.delete("/task/:id", auth, deleteTask);

export default router;