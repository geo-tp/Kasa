import { SmallBanner } from "../../layouts/SmallBanner";
import bannerImage from "../../assets/images/about.jpg";
import { DropDown } from "../../components/DropDown";

export const AboutPage = () => {
  return (
    <div className="aboutpage max-res">
      <SmallBanner image={bannerImage} alt="Montagnes enneigées" />
      <DropDown
        title="Fiabilité"
        paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        isOpen={true}
      />
      <DropDown
        title="Respect"
        paragraph="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        isOpen={false}
      />
      <DropDown
        title="Service"
        paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        isOpen={false}
      />
      <DropDown
        title="Responsabilité"
        paragraph="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        isOpen={false}
      />
    </div>
  );
};
