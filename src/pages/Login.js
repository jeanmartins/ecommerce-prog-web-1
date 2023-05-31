import { Input } from "../components/Input";
import "./LoginSignUp.css";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../services/api";

export function Login() {
  const [email, setEmail] = useState("");
  const [loginState, setLoginState] = useState({ loggedIn: false, email: "" });
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/ap1/v1/user/login", {
        email,
        senha: password,
      });

      if (response.data.errorMessage != null) {
        return console.error("Error logging in:", response.data.errorMessage);
      }

      console.log("User logged in successfully:", response.data);
      sessionStorage.setItem("jwt", response.data.token);
      setLoginState({ loggedIn: true, email: response.data.email });

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error logging in:", error.response.data);
    }
  };

  if (loginState.loggedIn) {
    return <Redirect to={`/profile/${encodeURIComponent(loginState.email)}`} />;
  }

  return (
    <section className="section-form div-column">
      <form onSubmit={handleSubmit}>
        <h1>Faça Login</h1>

        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Ex: alifernandes@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Não escreva 123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="div-buttons div-column">
          <button className="yellow" type="submit">
            Entrar
          </button>
          <Link to="/cadastro">Não tenho conta</Link>
        </div>
      </form>
    </section>
  );
}
