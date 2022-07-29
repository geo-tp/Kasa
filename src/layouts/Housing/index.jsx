import PropTypes from "prop-types";
import { HouseCard } from "../../components/HouseCard";

export const Housing = ({ houses }) => {
  return (
    <section className="housing">
      {houses.map((house) => (
        <HouseCard key={`housecard-${house.id}`} house={house} />
      ))}
    </section>
  );
};

Housing.propsType = {
  houses: PropTypes.array.isRequired,
};
