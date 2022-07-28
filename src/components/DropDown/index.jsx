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
      {dropIsOpen && (
        <div className="dropdown__drop">
          <ul>
            {list?.map((equipment) => (
              <li>{equipment}</li>
            ))}
            {paragraph && <p>{paragraph}</p>}
          </ul>
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  list: PropTypes.array,
  isOpen: PropTypes.bool,
};
