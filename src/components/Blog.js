import React from 'react'
// import BlogItem from './BlogItem'

const Blog = (props) => {

    // this function is used to pass the blog id, and fire a new function in the parent
    // class and pass the id
    const clickHandler = (id) => {
        props.getBlogId(id)
    }

    const renderBlogs = props.blog.map((data) => {
        return (
            <div>

                {/* fire a new method called clickHandler and passing the id of the blog */}
                <i onClick={() => clickHandler(data.id)}>
                    {data.text}
                </i>
                </div>
        )
    })

    return (
        <div>
            { renderBlogs }
        </div>
    )
}

export default Blog

