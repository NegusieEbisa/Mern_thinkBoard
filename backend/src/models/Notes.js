import mongoose from 'mongoose';
const noteSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},{
    timestamps: true
})
const Note = mongoose.model('Note', noteSchema);
export default Note;
// This code defines a Mongoose schema and model for a Note in a MongoDB database.
// The Note schema has two required fields: title and content, and it includes timestamps for creation and updates.