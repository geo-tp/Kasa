import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HouseCard = ({ house }) => {
  return (
    <Link to={`/house/${house.id}`} className="house-card">
      <div className="house-card__background"></div>
      <img src={house.cover} alt={house.title} />
      <h2>{house.title}</h2>
    </Link>
  );
};

HouseCard.propsType = {
  house: PropTypes.object.isRequired,
};
