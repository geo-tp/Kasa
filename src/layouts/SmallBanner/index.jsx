import PropTypes from "prop-types";

export const SmallBanner = ({ image, imageAlt, title }) => {
  return (
    <section className="small-banner">
      <div className="small-banner__background"></div>
      <img src={image} alt={imageAlt} />
      <h1>{title}</h1>
    </section>
  );
};

SmallBanner.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string,
};
