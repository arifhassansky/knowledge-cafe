import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({ blog, handleBookmarkBtn, handleMarkAsReadBtn }) => {
  const {
    id,
    title,
    cover_img,
    author_img,
    author_name,
    post_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="rounded-lg w-full" src={cover_img} />
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-fill"
            src={author_img}
          />
          <div>
            <p className="font-bold">{author_name}</p>
            <p className="font-semibold text-gray-400">{post_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 font-semibold">
            {reading_time} min read
          </span>
          <button onClick={() => handleBookmarkBtn(blog)}>
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h2 className="text-4xl mt-4 mb-4 font-semibold">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span className="mr-4 text-gray-400 font-semibold" key={idx}>
          <a href="#"> {hash} </a>
        </span>
      ))}
      <div className=" mt-5 font-bold">
        <a href="#" className="text-purple-600">
          <button onClick={() => handleMarkAsReadBtn(reading_time, id)}>
            Mark as read
          </button>
        </a>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarkBtn: PropTypes.func.isRequired,
  handleMarkAsReadBtn: PropTypes.func.isRequired,
};
export default Blog;
