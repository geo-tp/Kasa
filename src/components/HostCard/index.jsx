import PropTypes from "prop-types";

export const HostCard = ({ host }) => {
  return (
    <div className="host-card">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </div>
  );
};

HostCard.propTypes = {
  host: PropTypes.object.isRequired,
};
