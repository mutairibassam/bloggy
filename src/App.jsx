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
      <Blog blog={blogs} />
    </div>
  );
}

export default App;
