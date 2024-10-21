import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../blog/blog";

const Blogs = ({ handleBookmarkBtn, handleMarkAsReadBtn }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 ">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarkBtn={handleBookmarkBtn}
          handleMarkAsReadBtn={handleMarkAsReadBtn}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookmarkBtn: PropTypes.func.isRequired,
  handleMarkAsReadBtn: PropTypes.func.isRequired,
};

export default Blogs;
