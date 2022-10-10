import { useParams } from "react-router-dom";
import { Routes } from "../../api/routes";
import { HouseInformations } from "../../layouts/HouseInformations";
import { NotFoundPage } from "../NotFoundPage";

export const HouseDetailsPage = () => {
  const { houseId } = useParams();
  const house = Routes.getHouseById(houseId);

  return (
    <div className="house-details-page max-res layout-padding">
      {house ? <HouseInformations house={house} /> : <NotFoundPage />}
    </div>
  );
};
