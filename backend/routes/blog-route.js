import express from 'express';
import { addBlogs, 
    deleteBlog, getAllBlogs,
    getById, updateBlog } from '../controllers/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/addBlog', addBlogs);
blogRouter.put('/updateBlog/:id', updateBlog);
blogRouter.get('/getById/:id', getById);
blogRouter.delete('/deleteBlog/:id',deleteBlog);


export default blogRouter;