import React from "react";

function BlogDetails({ blogs }) {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>{blog.name} - {blog.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
