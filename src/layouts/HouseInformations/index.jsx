import PropTypes from "prop-types";
import { HostCard } from "../../components/HostCard";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";

export const HouseInformations = ({ house }) => {
  return (
    <section className="house-informations">
      <div className="house-informations__top">
        <div>
          <h1>{house.title}</h1>
          <p>{house.location}</p>
        </div>

        <HostCard host={house.host} />
      </div>
      <div className="house-information__middle">
        <div className="house-information__middle__tags">
          {house.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <Stars number={house.rating} totalNumer={5} />
      </div>
    </section>
  );
};

HouseInformations.propTypes = {
  house: PropTypes.object.isRequired,
};
