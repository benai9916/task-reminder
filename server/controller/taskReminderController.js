import TaskReminder from "../models/taskReminderModels.js";
import mongoose from 'mongoose';

export const addTask =  async (req, res) => {
    const reminder = req.body;

    const newReminder = new TaskReminder(reminder);

    try {
        await newReminder.save();

        res.status(201).json(newReminder);

    } catch (err) {
        res.status(409).json({errorMessage: err});
    }
};

export const getTask = async (req, res) => {
    try {
        const allReminder = await TaskReminder.find();

        res.status(200).json(allReminder);

    } catch (err) {
        res.status(404).json({errorMessage: err});
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const taskToUpdate = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({errorMessage: "no product with this id"});

    const updatedTask = await TaskReminder.findByIdAndUpdate(id, {...taskToUpdate, id} , { new: true});

    res.status(200).json(updatedTask);

};

export const deleteTask = async (req, res) => {
    const { id }  = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({errorMessage: "no product with this id"});

    await TaskReminder.findByIdAndRemove(id);

    res.status(200).json( { success: "deleted successfylly"});
};