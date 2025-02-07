import notFoundImg from "../assets/404.png";
import "../assets/styles/pageNotFoud.css";

function PageNotFound() {
  return (
    // Conteneur principal de la page d'erreur
    <main className="error">
      <img src={notFoundImg} alt="Erreur 404" />
      <p>Oups! La page que vous avez demandez n'existe pas.</p>
    </main>
  );
}

export default PageNotFound;
