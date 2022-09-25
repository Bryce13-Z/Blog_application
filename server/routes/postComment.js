import express from "express"
const router = express()

import auth from "../middleware/auth.js";
import {getComments, createComment} from '../controllers/postComment.js'


router.get("/:id", auth, getComments);
router.post("/:id", auth, createComment);



export default router;