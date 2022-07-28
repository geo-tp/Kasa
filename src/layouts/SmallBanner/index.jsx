import PropTypes from "prop-types";

export const SmallBanner = ({ image, alt, title }) => {
  return (
    <section className="small-banner">
      <div className="small-banner__background"></div>
      <img src={image} alt={alt} />
      <h1>{title}</h1>
    </section>
  );
};

SmallBanner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};
