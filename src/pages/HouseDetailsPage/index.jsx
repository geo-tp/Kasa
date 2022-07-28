import { useParams } from "react-router-dom";
import { Routes } from "../../api/routes";
import { HouseInformations } from "../../layouts/HouseInformations";

export const HouseDetailsPage = () => {
  const { houseId } = useParams();
  const house = Routes.getHouseById("c67ab8a7");

  return (
    <div className="house-details-page max-res">
      <HouseInformations house={house} />
    </div>
  );
};
