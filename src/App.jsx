import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";
import ReadingTime from "./components/readingTime/ReadingTime";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarkBtn = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  const handleMarkAsReadBtn = (time, id) => {
    setReadingTime(readingTime + time);
    const remaining = bookmarks.filter((bookmarks) => bookmarks.id !== id);
    setBookmarks(remaining);
  };
  return (
    <>
      <Header></Header>
      <main className=" flex w-10/12 mx-auto gap-6">
        <Blogs
          handleBookmarkBtn={handleBookmarkBtn}
          handleMarkAsReadBtn={handleMarkAsReadBtn}
        ></Blogs>

        <div className="w-1/3">
          <ReadingTime readingTime={readingTime}></ReadingTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
