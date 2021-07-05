import mongoose from "mongoose";

const taskReminderSchema = new mongoose.Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    dateTime: {type: String, require: true},
})

const TaskReminder = mongoose.model("reminders", taskReminderSchema);

export default TaskReminder;