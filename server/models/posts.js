import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    authorID: {type: String},
    articleTitle: {type: String},
    content: {type: String},
    tags: {type: [String], default:[]},
    likes: {type: [String], default: []},
    createdAt: {type: Date, default: new Date()},
    id: {type: String}
})

let PostsModel = mongoose.model("PostsModel", postsSchema);
export default PostsModel