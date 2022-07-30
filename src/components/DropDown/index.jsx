import PropTypes from "prop-types";
import { useState } from "react";

export const DropDown = ({ title, paragraph, list, isOpen }) => {
  const [dropIsOpen, setDropIsOpen] = useState(isOpen);

  const handleClick = () => {
    setDropIsOpen(!dropIsOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__top" onClick={handleClick}>
        <span>{title}</span>
        <i
          className={
            dropIsOpen
              ? "fas fa-angle-up dropdown__top__angle"
              : "fas fa-angle-up dropdown__top__angle--reverse"
          }
        ></i>
      </div>
      <div
        className={
          dropIsOpen
            ? "dropdown__drop dropdown__drop--isopen"
            : "dropdown__drop"
        }
      >
        <ul>
          {list?.map((equipment) => (
            <li key={`equipment-${equipment}`}>{equipment}</li>
          ))}
          {paragraph && <p>{paragraph}</p>}
        </ul>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  list: PropTypes.array,
  isOpen: PropTypes.bool,
};
