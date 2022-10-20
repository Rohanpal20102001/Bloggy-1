import Header from "./components/Header";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import {Route, Routes} from 'react-router-dom';
import React from "react";
import {useSelector} from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/myBlogs' element={<UserBlog />}></Route>
          <Route path='/myBlogs/:id' element={<BlogDetail />}></Route>
          <Route path='/blogs/add' element={<AddBlog />}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
