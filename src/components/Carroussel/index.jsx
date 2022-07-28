import PropTypes from "prop-types";
import { useState } from "react";

export const Carroussel = ({ pictures }) => {
  const [displayedPictureIndex, setDisplayedPictureIndex] = useState(0);

  const handleAngleLeftClick = () => {
    if (displayedPictureIndex - 1 < 0) {
      setDisplayedPictureIndex(pictures.length - 1);
    } else {
      setDisplayedPictureIndex(displayedPictureIndex - 1);
    }
  };

  const handleAngleRightClick = () => {
    if (displayedPictureIndex === pictures.length - 1) {
      setDisplayedPictureIndex(0);
    } else {
      setDisplayedPictureIndex(displayedPictureIndex + 1);
    }
  };

  return (
    <div className="carroussel">
      <img src={pictures[displayedPictureIndex]} alt="Pièce de la maison" />
      <i
        onClick={handleAngleLeftClick}
        className="fa fa-angle-left carroussel__angle--left carroussel__angle"
      ></i>
      <i
        onClick={handleAngleRightClick}
        className="fa fa-angle-right carroussel__angle--right carroussel__angle"
      ></i>
      <span className="carroussel__pictures-number">{`${
        displayedPictureIndex + 1
      }/${pictures.length}`}</span>
    </div>
  );
};

Carroussel.propTypes = {
  pictures: PropTypes.array.isRequired,
};
