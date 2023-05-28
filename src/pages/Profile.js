import React, { useState, useEffect } from "react";

import { Input } from "../components/Input";
import { User, ShoppingBag, SignOut} from "phosphor-react";

import './Profile.css';

const user = {
    id: '123',
    tipo: 'admin',
    nome: 'Alissa Fernandes',
    email: 'alissa.fernandes@gmail.com',
    senha: "senha",
    endereco: 'Rua das Capivaras, 233, Bairro Lagoinha - Caruaru, PE'
}

export function Profile () {
    const [status, setStatus] = useState("minha-conta");
    const [pedidos, setPedidos] = useState([]);

    const handleSetConta = () => setStatus("minha-conta");
    const handleSetPedidos = () => setStatus("meus-pedidos");

    const getMeusPedidos = () => setPedidos([
        {
            id: '12345678',
            status: 'entregue',
            img: 'https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000',
            produto: 'Ração Golden Special para Cães Adultos Sabor Frango e Carne - 20kg',
            total: 'R$149,90',
        },
        {
            id: '12345678',
            status: 'entregue',
            img: 'https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000',
            produto: 'Ração Golden Special para Cães Adultos Sabor Frango e Carne - 20kg',
            total: 'R$149,90',
        },
        {
            id: '12345678',
            status: 'entregue',
            img: 'https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000',
            produto: 'Ração Golden Special para Cães Adultos Sabor Frango e Carne - 20kg',
            total: 'R$149,90',
        }
    ]);

    useEffect(() => {
        getMeusPedidos();
    }, []);

    return (
        <section className="section-profile div-column">
            <div className="div-row">
                <h1>{user.nome}</h1>
                {user.tipo === 'admin' ? <span className="admin">admin</span> : <></>}
            </div>

            <div className="section-content">
                <div className="group-menu">
                    <button 
                        className="item-menu"
                        id={status === "minha-conta" ? "selected" : null}
                        onClick={handleSetConta}
                    >
                        <User color="#404040" size={20}/>
                        <span>Minha conta</span>
                    </button>

                    {user.tipo === 'cliente' ? 
                        <button 
                            className="item-menu"
                            id={status === "meus-pedidos" ? "selected" : null}
                            onClick={handleSetPedidos}
                        >
                            <ShoppingBag color="#404040" size={20}/>
                            <span>Meus pedidos</span>
                        </button>
                    : 
                        <></>
                    }
                    
                    <button 
                        className="item-menu"
                        id="sair"
                        onClick={() => {}}
                    >
                        <SignOut color="#404040" size={20}/>
                        <span>Sair</span>
                    </button>
                </div>
            
                <div className="group-options">
                    {status === "minha-conta" ?
                        <div className="minha-conta">
                            {/* VER CONTA */}
                            <h3>Minha conta</h3>
                            <hr/>

                            <div className="dados div-column">
                                <label>
                                    <span>Nome:</span>
                                    {user.nome}
                                </label>
                                <label>
                                    <span>Email:</span>
                                    {user.email}
                                </label>
                                <label>
                                    <span>Endereço:</span>
                                    {user.endereco}
                                </label>
                            </div>

                            {/* EDITAR CONTA */}
                            <h3>Editar conta</h3>
                            <hr/>

                            <form className="group-inputs div-column">
                                <Input 
                                    id="nome"
                                    type="text"
                                    label="Nome"
                                    placeholder="Ex: Alissa Fernandes"
                                    value={user.nome}
                                />

                                <Input 
                                    id="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Ex: alifernandes@gmail.com"
                                    value={user.email}
                                    disabled
                                />

                                <Input 
                                    id="endereco"
                                    type="text"
                                    label="Endereço"
                                    placeholder="Ex: Rua 2, Diamantina"
                                    value={user.endereco}
                                />

                                <Input 
                                    id="password"
                                    type="password"
                                    label="Senha"
                                    placeholder="Não escreva 123"
                                    value={user.senha}
                                />

                                <button 
                                    className="yellow"
                                    onSubmit={() => {}}
                                >
                                    Salvar alterações
                                </button>
                            </form>

                            {/* EXCLUIR CONTA */}
                            <h3>Excluir conta</h3>
                            <hr/>

                            <div className="group-excluir div-column">
                                <label>
                                Ao excluir a conta, você não vai ter acesso ao histórico de pedidos
                                mesmo que se cadastre novamente.
                                </label>

                                <button 
                                    className="danger"
                                    onClick={() => {}}
                                >
                                    Excluir conta
                                </button>
                            </div>
                        </div>
                    :
                        <div className="meus-pedidos">
                            <h3>Meus pedidos</h3>
                            <hr/>

                            {pedidos.map(pedido => (
                                <div className="item-pedido">
                                    <div className="infos-pedido">
                                        <span className="id">PEDIDO Nº {pedido.id}</span>
                                        <span className="status">{pedido.status}</span>
                                        
                                    </div>

                                    {/* <hr id="separador"/> */}

                                    <div className="content-pedido">
                                        <div className="desc">
                                            <img src={pedido.img} alt={pedidos.produto} />
                                            <label>{pedido.produto}</label>
                                        </div>
                                        
                                        <h3>{pedido.total}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>    
            </div>
        </section>
    )
}