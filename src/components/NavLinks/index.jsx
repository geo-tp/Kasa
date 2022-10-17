import { Link, useLocation } from "react-router-dom";

export const NavLinks = (currentPage) => {
  const { pathname } = useLocation();
  return (
    <nav className="navlinks">
      <ul>
        <li>
          <Link
            to="/"
            className={
              pathname === "/"
                ? "navlinks__link navlinks__link--active"
                : "navlinks__link"
            }
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              pathname === "/about"
                ? "navlinks__link navlinks__link--active"
                : "navlinks__link"
            }
          >
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
