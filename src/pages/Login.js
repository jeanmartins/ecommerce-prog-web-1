import React from "react";

export function Login() {
    return (
        <section className="login">
            <h1>Faça Login</h1>
            
            <div className="div-inputs">
                <div className="label-required">
                    <label for="email">Email</label>
                    <label className="asterisco">*</label>
                </div>
                <input
                    id="email"
                    type="email"
                    placeholder="digite seu email"
                />
            </div>
        </section>
    );
}