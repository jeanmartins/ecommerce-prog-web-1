import React from "react";
import { Link } from "react-router-dom";

import './Login.css';

export function Login() {
    return (
        <section className="section-form div-column">
            <form onSubmit={() =>{}}>
                <h1>Faça Login</h1>
                
                <div className="div-inputs div-column">
                    <div className="label-input">
                        <label for="email">Email</label>
                        <label className="required">*</label>
                    </div>
                    <input
                        id="email"
                        type="email"
                        placeholder="Ex: alifernandes@gmail.com"
                    />

                    <div className="label-input">
                        <label for="email">Senha</label>
                        <label className="required">*</label>
                    </div>
                    <input
                        id="password"
                        type="password"
                        placeholder="Não escreva “123”"
                    />
                </div>

                <div className="div-buttons div-column">
                    <button className="yellow" type="submit">Entrar</button>
                    <Link to="/cadastro">Não tenho conta</Link>
                </div>
            </form>
        </section>
    );
}