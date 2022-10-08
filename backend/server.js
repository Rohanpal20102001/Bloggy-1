import express from 'express';
const app = express();
import mongoose from 'mongoose';
import router from './routes/user-route';
import blogRouter from './routes/blog-route';

app.use(express.json());
//User Routes
app.use('/api/user',router);
//Blog Routes
app.use('/api/blog', blogRouter);
//DB
const url = 'mongodb+srv://phantom:phantom24'
+'@bloggy.scdhhsu.mongodb.net/blog?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    app.listen(8080);
})
.then(() => {
    console.log("DB is connected & server is listening on 8080");
})
.catch(() => {
    console.log("Error connecting DB")
});







