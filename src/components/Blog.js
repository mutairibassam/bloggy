import React from 'react'
// import BlogItem from './BlogItem'

const Blog = (props) => {

    // const deleteBlogHandler = (id) => {
        
    // }

    const clickHandler = (id) => {
        // console.log("props", props) 
        props.getBlogId(id)
    }

    const renderBlogs = props.blog.map((data) => {
        // console.log(data)
        console.log(data.id)
        return (
            // <BlogItem blog={data}></BlogItem>
            <div>
                
                <i onClick={() => clickHandler(data.id)}>
                {data.text}
                </i>
                </div>
            // <div>{data.text}</div>

        )
    })

    return (
        <div>
            { renderBlogs }
        </div>
    )
}

export default Blog

