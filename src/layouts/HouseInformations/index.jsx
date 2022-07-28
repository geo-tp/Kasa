import PropTypes from "prop-types";
import { HostCard } from "../../components/HostCard";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";

export const HouseInformations = ({ house }) => {
  console.log(house.rating);
  return (
    <section className="house-informations">
      <div className="house-informations__top">
        <div>
          <h1 className="house-informations">{house.title}</h1>
          <p className="house-informations">{house.location}</p>
        </div>

        <HostCard host={house.host} />
      </div>
      <div className="house-informations__middle">
        <div className="house-informations__middle__tags">
          {house.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <Stars number={3} totalNumber={5} />
      </div>
    </section>
  );
};

HouseInformations.propTypes = {
  house: PropTypes.object.isRequired,
};
