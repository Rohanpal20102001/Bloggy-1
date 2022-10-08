import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title : {
        type: String,
        required: true,
        maxlength: 50
    },
    description : {
        type: String,
        required: true,
        maxlength: 200
    },
    imgUrl : {
        type: String,
        required: true
    },
    user : {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
});

export default mongoose.model('Blog',blogSchema);