import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ title, id, author }) => (
        <div className="blog-preview" key={id}>
          <Link to={`/blogs/${id}`}>
            <h2>{title}</h2>
            <p>By {author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
