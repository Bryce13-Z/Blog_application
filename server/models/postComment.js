import mongoose from "mongoose";

const postMessageSchema = mongoose.Schema({
    postId: {type: String},
    userId: {type: String},
    comment: {type: String},
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: {type: String}
})

let PostCommentModel = mongoose.model("PostCommentModel", postMessageSchema);
export default PostCommentModel;