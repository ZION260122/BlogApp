import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Correct import statement
import { blogList } from "../../config/data";
import { Link } from "react-router-dom"; // Correct import statement
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/Chip/EmptyList";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, [id]); // Add id to dependency array to re-run effect when id changes

  return (
    <div>
      <Link to="/">
        <span>&#8592;</span> Go Back
      </Link>

      {blog ? ( // Use ternary operator for conditional rendering
        <div className="blog-wrap">
          <header>
            <p className="blog-data">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div key={index}> {/* Add key prop to the outer div */}
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
        </div>
      ) : (
        <EmptyList message="No blog found" /> // Render a message if blog is not found
      )}
    </div>
  );
};

export default Blog;
