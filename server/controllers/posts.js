import express from 'express'
import mongoose from 'mongoose'

import PostsModel from '../models/posts.js'
import TagsModel from '../models/tags.js'

export const getPosts = (req, res) => {
    console.log(req.user);
    res.json({posts: "pass"})
}

export const getPost = (req, res) => {
    
}

export const getPostsByTagName = (req, res) => {
    
}

export const getPostsByMyFavorite = (req, res) => {
    
}

export const getPostsByMyArticle = (req, res) => {
    
}

export const createPost = (req, res) => {
    
}

export const deletePost = (req, res) => {
    
}

export const likePost = (req, res) => {
    
}

