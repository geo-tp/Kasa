import PropTypes from "prop-types";

export const HouseCard = ({ house }) => {
  return (
    <article className="house-card">
      <div className="house-card__background"></div>
      <img src={house.cover} alt={house.title} />
      <h2>{house.title}</h2>
    </article>
  );
};

HouseCard.propsType = {
  house: PropTypes.object.isRequired,
};
