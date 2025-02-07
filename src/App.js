import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import User from "./pages/User.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Footer from "./components/Footer.jsx";

import "./assets/styles/index.css";

function App() {
  // Récupération des informations de l'utilisateur en vérifiant la présence dans le localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Composant PrivateRoute pour protéger les routes nécessitant une authentification
  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");
  
    return token ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profil"
          element={<PrivateRoute element={<User user={user} />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
