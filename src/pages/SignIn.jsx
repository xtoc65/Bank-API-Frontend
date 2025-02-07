import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/signIn.css";

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Réinitialise l'erreur au début de la soumission

    try {
      await login(credentials);
      navigate("/profil");
    } catch (error) {
      setError("Échec de la connexion.");
      console.log(error);
    }
  };

  return (
    <main className="sing-in">
      <section>
        <div>
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form className="input" onSubmit={handleSubmit}>
            <div className="wrapper">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div className="wrapper">
              <label htmlFor="password">Password</label>{" "}
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <div className="remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit">Sign In</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignIn; // Correction dans le nom de l'export
