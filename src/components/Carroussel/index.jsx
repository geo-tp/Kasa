import PropTypes from "prop-types";
import { createRef, useRef, useState } from "react";

export const Carroussel = ({ pictures }) => {
  const [displayedPictureIndex, setDisplayedPictureIndex] = useState(0);
  const pictureRefs = [];

  const createPictureRefs = () => {
    for (let i = 0; i < pictures.length; i++) {
      pictureRefs.push(createRef());
    }
  };

  createPictureRefs();

  const handleAngleLeftClick = () => {
    let newIndex = 0;
    if (displayedPictureIndex - 1 < 0) {
      newIndex = pictures.length - 1;
    } else {
      newIndex = displayedPictureIndex - 1;
    }
    setDisplayedPictureIndex(newIndex);
    pictureRefs[newIndex].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleAngleRightClick = () => {
    let newIndex = 0;
    if (displayedPictureIndex !== pictures.length - 1) {
      newIndex = displayedPictureIndex + 1;
    }

    setDisplayedPictureIndex(newIndex);
    pictureRefs[newIndex].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className="carroussel">
      <div className="carroussel__pictures">
        {pictures?.map((picture, index) => (
          <img
            src={picture}
            ref={pictureRefs[index]}
            alt="Pièce de la maison"
          />
        ))}
      </div>
      {pictures.length > 1 && (
        <i
          onClick={handleAngleLeftClick}
          className="fa fa-angle-left carroussel__angle--left carroussel__angle"
        ></i>
      )}
      {pictures.length > 1 && (
        <i
          onClick={handleAngleRightClick}
          className="fa fa-angle-right carroussel__angle--right carroussel__angle"
        ></i>
      )}
      <span className="carroussel__pictures-number">{`${
        displayedPictureIndex + 1
      }/${pictures.length}`}</span>
    </div>
  );
};

Carroussel.propTypes = {
  pictures: PropTypes.array.isRequired,
};
