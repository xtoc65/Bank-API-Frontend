// Importation de NavLink depuis react-router-dom pour la navigation
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../services/fetchUserProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// Importation de l'image du logo
import Logo from "../assets/Logo.png";
import "../assets/styles/header.css";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  // Vérifie la présence du token dans localStorage au chargement du Header
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      dispatch(fetchUserProfile()); // Récupérer le profil si le token est présent
    }
  }, [dispatch, user]);

  // Fonction de déconnexion
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <header>
      <nav className="nav_container">
        <NavLink to="/">
          <img src={Logo} alt="Logo ArgentBank" />
        </NavLink>
        {user ? (
          <div>
            <NavLink  className="nav_link" to="/profil">{user?.firstName}</NavLink>
            <NavLink className="nav_link" onClick={handleLogout}>
              Se déconnecter
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink className="nav_link" to="/login">
              <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
