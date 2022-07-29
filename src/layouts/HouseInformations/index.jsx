import PropTypes from "prop-types";
import { Carroussel } from "../../components/Carroussel";
import { DropDown } from "../../components/DropDown";
import { HostCard } from "../../components/HostCard";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";

export const HouseInformations = ({ house }) => {
  return (
    <section className="house-informations max-res">
      <Carroussel pictures={house.pictures} />
      <div className="house-informations__top">
        <div className="house-informations__top__left">
          <h1>{house.title}</h1>
          <p>{house.location}</p>
          <div>
            {house.tags.map((tag) => (
              <Tag tag={tag} key={`tag-${tag}`} />
            ))}
          </div>
        </div>
        <div className="house-informations__top__right">
          <HostCard host={house.host} />
          <Stars number={house.rating} totalNumber={5} />
        </div>
      </div>
      <div className="house-informations__bottom">
        <DropDown
          title="Description"
          paragraph={house.description}
          isOpen={true}
        />
        <DropDown title="Equipements" list={house.equipments} isOpen={true} />
      </div>
    </section>
  );
};

HouseInformations.propTypes = {
  house: PropTypes.object.isRequired,
};
