import PropTypes from "prop-types";

export const Stars = ({ number, totalNumber }) => {
  // We create 2 array of numbers to iterate on it
  const activeStars = Array.from(Array(parseInt(number)).keys());
  const inactiveStars = Array.from(
    Array(parseInt(totalNumber - number)).keys()
  );

  return (
    <div className="stars">
      {activeStars.map((i) => (
        <i className="fas fa-2x fa-star stars__star--active" />
      ))}
      {inactiveStars.map((i) => (
        <i className="fas fa-2x fa-star stars__star" />
      ))}
    </div>
  );
};

Stars.propTypes = {
  number: PropTypes.number.isRequired,
  totalNumber: PropTypes.number.isRequired,
};
