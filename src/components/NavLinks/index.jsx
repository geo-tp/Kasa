import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <nav class="navlinks">
      <ul>
        <li>
          <Link to="/accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};