import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    // parameters
    name: String, // not the same as a var of type string. Not a language acronym. It is a tupe create by mongoose
    year: String,
    director: String,
    genre: String,
    runtime: Number

}, {
    // options
    timestamps: true,
    collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);