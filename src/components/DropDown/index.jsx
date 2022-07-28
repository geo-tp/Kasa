import PropTypes from "prop-types";
import { useState } from "react";

export const DropDown = ({ title, paragraph, list, isOpen }) => {
  const [dropIsOpen, setDropIsOpen] = useState(isOpen);

  const handleClick = () => {
    setDropIsOpen(!dropIsOpen);
  };

  if (list) {
    return;
  }

  return (
    <div className="dropdown">
      <div className="dropdown__top" onClick={handleClick}>
        <span>{title}</span>
        <i className={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></i>
      </div>
      {dropIsOpen && (
        <div className="dropdown__drop">
          <p>{paragraph}</p>
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
