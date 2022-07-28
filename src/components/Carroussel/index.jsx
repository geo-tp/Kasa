import PropTypes from "prop-types";

export const Carroussel = ({ pictures }) => {
  return (
    <div className="carroussel">
      <img src={pictures[0]} alt="pièce de la maison" />
    </div>
  );
};

Carroussel.propTypes = {
  pictures: PropTypes.array.isRequired,
};
