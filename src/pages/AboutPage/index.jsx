import { SmallBanner } from "../../layouts/SmallBanner";
import bannerImage from "../../assets/images/home.jpg";

export const Home = () => {
  return (
    <main className="homepage">
      <SmallBanner
        image={bannerImage}
        alt="Rochers proches de l'ocean"
        title="Chez vous, partout et ailleurs"
      />
    </main>
  );
};
