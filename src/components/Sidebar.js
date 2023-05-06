import { NavLink } from "react-router-dom";

import { ShoppingCart } from 'phosphor-react';
import logo from '../assets/logo.svg';

import './Sidebar.css';

export function Sidebar() {
    return(
        <nav className="sidebar"> 
            <NavLink to="/">
                <img className="logo" src={logo} alt="logo" />
            </NavLink>

            <div className="actions-nav">
                <NavLink to="/login" className="button-nav secondary">
                    <span>Entrar</span>
                </NavLink>

                <NavLink to="/cadastro" className="button-nav primary">
                    <span>Criar conta</span>
                </NavLink>

                <NavLink to="/carrinho">
                    <ShoppingCart 
                        color="#FFF"
                        size={24}
                    />
                </NavLink>
            </div>
        </nav>
    );
}