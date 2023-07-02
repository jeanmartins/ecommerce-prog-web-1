import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../components/Input";

import './LoginSignUp.css';

export function SignUp() {
    return (
        <section className="section-form div-column">
            <form onSubmit={() =>{}}>
                <h1>Crie sua conta</h1>

                <Input 
                    id="name"
                    type="text"
                    label="Nome"
                    placeholder="Ex: Alissa"
                />
                
                <Input 
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Ex: alifernandes@gmail.com"
                />

                <Input 
                    id="endereco"
                    type="text"
                    label="Endereco"
                    placeholder="Ex: Rua 2, Diamantina"
                />

                <Input 
                    id="password"
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                />

                <div className="div-buttons div-column">
                    <button className="yellow" type="submit">Criar minha conta</button>
                    <Link to="/login">Já tenho conta</Link>
                </div>
            </form>
        </section>
    );
}