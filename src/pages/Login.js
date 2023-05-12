import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../components/Input";

import './LoginSignUp.css';

export function Login() {
    return (
        <section className="section-form div-column">
            <form onSubmit={() =>{}}>
                <h1>Faça Login</h1>
                
                <Input 
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Ex: alifernandes@gmail.com"
                />

                <Input 
                    id="password"
                    type="password"
                    label="Senha"
                    placeholder="Não escreva 123"
                />

                <div className="div-buttons div-column">
                    <button className="yellow" type="submit">Entrar</button>
                    <Link to="/cadastro">Não tenho conta</Link>
                </div>
            </form>
        </section>
    );
}