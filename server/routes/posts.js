import express from "express"
const router = express()

import auth from '../middleware/auth.js'; 
import {getPost, getPosts, getPostsByTagName, getPostsByMyFavorite, getPostsByMyArticle, createPost, deletePost, likePost} from '../controllers/posts.js';

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/tag", getPostsByTagName);

router.get("/myfavorite", auth, getPostsByMyFavorite);
router.get("/myArticle", auth, getPostsByMyArticle);

router.post("/", auth, createPost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
