import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Deconnexion from "../Log/Deconnexion";

const Navbar = () => {

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

  return (
      <nav className="nav">
        <Link to="/">
          <img
            className="site-title"
            src="./img/icon-left-font-monochrome-white.png"
            alt="website logo"
          />
        </Link>
        <ul>
          {/* <CustomLink to="/upload">Publier</CustomLink> */}
          <CustomLink to="/profil">Profil</CustomLink>
          < Deconnexion/>
        </ul>
      </nav>
  );
};

export default Navbar;
