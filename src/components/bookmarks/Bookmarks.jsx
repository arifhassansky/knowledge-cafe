import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bg-[#1111110d] p-7 rounded-lg h-full">
      <h3 className="font-bold text-2xl mb-4 text-center ">
        Bookmarks: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmarks;
