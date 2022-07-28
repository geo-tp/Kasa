import PropTypes from "prop-types";

export const Stars = ({ number, totalNumber }) => {
  return (
    <div className="stars">
      {Array(number).map((i) => (
        <i className="fas fa-star stars__star--active" />
      ))}
      {Array(totalNumber - number).map((i) => (
        <i className="fas fa-star stars__star" />
      ))}
    </div>
  );
};

Stars.propTypes = {
  number: PropTypes.number.isRequired,
  totalNumber: PropTypes.number.isRequired,
};
