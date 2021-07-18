import React from 'react'
// import BlogItem from './BlogItem'

const Blog = (props) => {

    const renderBlogs = props.blog.map((data) => {
        console.log(data)
        return (
            // <BlogItem blog={data}></BlogItem>
            <div>{data.text}</div>
        )
    })

    return (
        <div>
            { renderBlogs }
        </div>
    )
}

export default Blog

