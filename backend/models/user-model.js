import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true,
        minlength: 6
    },
    blogs: [{
        types: mongoose.type.ObjectId,
        ref: "Blog",
        required: true
    }]
});

export default mongoose.model("User",userSchema);
//const model = mongoose.model("User",userSchema);
//module.exports = model;
