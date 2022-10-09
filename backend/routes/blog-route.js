import express from 'express';
import { addBlogs, 
    deleteBlog, getAllBlogs,
    getById, getUserById, updateBlog } from '../controllers/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/addBlog', addBlogs);
blogRouter.put('/updateBlog/:id', updateBlog);
blogRouter.get('/getById/:id', getById);
blogRouter.delete('/deleteBlog/:id',deleteBlog);
blogRouter.get('/user/:id', getUserById);


export default blogRouter;