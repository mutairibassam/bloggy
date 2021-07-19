import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Blog from './components/Blog';
import { uuid } from 'uuidv4'

function App() {

  const LOCAL_STORAGE_KEY = "blogs"

  const [blogs, setBlog] = useState([])

  const addBlogsHandler = (blog) => {
    // to save all the previous inputs and show them as a list
    setBlog([ ...blogs, {id: uuid(), ...blog}])
  }

  // this function takes the id as an arg, and generate a new list after removing
  // the selected id
  const removeBlogsHandler = (id) => {
    console.log("this is from inside remove" , id)
      const newBlogList = blogs.filter((blog) => {
        return blog.id !== id;
      })

      setBlog(newBlogList)
  }

    // get the data from the local storage
    useEffect(() => {
      const retrivedBlogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (retrivedBlogs) setBlog(retrivedBlogs);
  },[])

  // save the data to the local storage
  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs))
  },[blogs])

  return (
    <div>
      <Header />
      <Body addBlogsHandler={addBlogsHandler}/>

      {/* `getBlogId` gets the blog id form the child class and fire a new function
        called `removeBlogsHandler`
      */}
      <Blog blog={blogs} getBlogId={removeBlogsHandler}/>
      {/* <Blog blog={blogs}/> */}
    </div>
  );
}

export default App;
