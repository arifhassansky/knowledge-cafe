import PropTypes from "prop-types";
const ReadingTime = ({ readingTime }) => {
  return (
    <div className="text-center py-5 bg-[#6047ec1a] rounded-lg mb-6">
      <h3 className="text-purple-700 text-2xl font-bold ">
        Reading Time: {readingTime}
      </h3>
    </div>
  );
};
ReadingTime.propTypes = {
  readingTime: PropTypes.number.isRequired,
};

export default ReadingTime;
