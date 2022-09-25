import mongoose from "mongoose"

const tagsSchema = mongoose.Schema({
    tagName: {type: String},
    postId: {type: [String]},
    id: {type: String}
})

let TagsModel = mongoose.model("TagsModel", tagsSchema);

export default TagsModel;