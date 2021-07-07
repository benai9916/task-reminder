import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routers/userRouter.js";
import taskReminderRouter from "./routers/taskReminderRouter.js";

dotenv.config();

//  serverset up
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: ["https://reemind-webapp.herokuapp.com"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());


// connect to db
mongoose.connect(process.env.MONGO_URL_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
    .catch((error) => console.log('Encounter Error => ',error));


// routes
app.use("/auth", userRouter);
app.use("/api", taskReminderRouter);