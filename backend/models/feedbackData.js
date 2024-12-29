import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    course_id: { type: String, required: true },
    course_name: { type: String, required: true },
    course_duration: { type: String, required: true },
    course_ratings: { type: Number, default: null }
});

export default mongoose.model('rating', feedbackSchema);