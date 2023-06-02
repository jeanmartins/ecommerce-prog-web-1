import { NavLink } from "react-router-dom";

import { ShoppingCart, User } from 'phosphor-react';
import logo from '../assets/logo.svg';

import './Sidebar.css';

const user = {
    id: '123',
    tipo: 'admin',
    nome: 'Alissa Fernandes',
    email: 'alissa.fernandes@gmail.com',
    senha: "senha",
    endereco: 'Rua das Capivaras, 233, Bairro Lagoinha - Caruaru, PE'
}

const isLogged = true;

export function Sidebar() {
    return(
        <nav className="sidebar"> 
            <NavLink to="/">
                <img className="logo" src={logo} alt="logo" />
            </NavLink>

            {isLogged ?
                <div className="actions-nav">
                    <NavLink to="/carrinho">
                        <ShoppingCart 
                            color="#FFF"
                            size={28}
                        />
                    </NavLink>

                    {user.tipo !== 'admin' ?
                        <NavLink to="/carrinho">
                            <User
                                color="#FFF"
                                size={28}
                                className="Islogged"
                            />
                        </NavLink>
                    : <></>
                    }

                    
                </div>
            :
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
                            size={28}
                        />
                    </NavLink>
                </div>  
            }
        </nav>
    );
}