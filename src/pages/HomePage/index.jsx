import { SmallBanner } from "../../layouts/SmallBanner";
import bannerImage from "../../assets/images/home.jpg";
import { Housing } from "../../layouts/Housing";
import { Routes } from "../../api/routes";
import { useState } from "react";

export const HomePage = () => {
  const [houses, setHouses] = useState(Routes.getHouses());

  return (
    <div className="homepage max-res layout-padding">
      <SmallBanner
        image={bannerImage}
        alt="Rochers proches de l'ocean"
        title="Chez vous, partout et ailleurs"
      />
      <Housing houses={houses} />
    </div>
  );
};
