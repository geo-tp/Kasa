import PropTypes from "prop-types";
import { Carroussel } from "../../components/Carroussel";
import { DropDown } from "../../components/DropDown";
import { HostCard } from "../../components/HostCard";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";

export const HouseInformations = ({ house }) => {
  console.log(house.rating);
  return (
    <section className="house-informations max-res">
      <Carroussel pictures={house.pictures} />
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
            <Tag tag={tag} key={`tag-${tag}`} />
          ))}
        </div>
        <Stars number={house.rating} totalNumber={5} />
      </div>
      <div className="house-informations__bottom">
        <DropDown
          title="Description"
          paragraph={house.description}
          isOpen={true}
        />
      </div>
    </section>
  );
};

HouseInformations.propTypes = {
  house: PropTypes.object.isRequired,
};
