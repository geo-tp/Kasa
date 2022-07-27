import { Logo } from "../../components/Logo";
import { NavLinks } from "../../components/NavLinks";

export const Header = () => {
  return (
    <header class="header">
      <Logo />
      <NavLinks />
    </header>
  );
};
