import express from 'express';
const router = express.Router();
import feedbackModel from '../models/feedbackData.js';

router.post('/add-course', async (req, res) => {
    const { course_id, course_name, course_duration } = req.body;
    try {
        const existingCourse = await feedbackModel.findOne( { course_id });
        if (existingCourse) {
            return res.status(400).json({message: "Course is already registered"})
        }

        const newCourse = new feedbackModel({
            course_id,
            course_name,
            course_duration
        });

        await newCourse.save();
        res.status(201).json({ message: "Course added successfully" });
    } catch (error) {
        console.error("Error adding course:", error);
        res.status(500).json({ message: 'Error adding course'});
    }
})

router.get('/get-courses', async (req, res) => {
    try {
        const data = await feedbackModel.find();
        res.status(200).send(data);
        console.log(data);
    } catch(error) {
        res.status(404).send(error);
    }
})

router.post('/add-ratings', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

export default router;