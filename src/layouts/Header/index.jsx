import { Logo } from "../../components/Logo";
import { NavLinks } from "../../components/NavLinks";

export const Header = () => {
  return (
    <header className="header max-res layout-padding">
      <Logo />
      <NavLinks />
    </header>
  );
};
