const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const {Schema} = mongoose;

const postSchema = new Schema({
    // title: String,
    body: {type:String, required:true},
    price: {type:String, required:true},
    author: {type: ObjectId, ref: "User"},
    loc: {lat: Number, long: Number},
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);