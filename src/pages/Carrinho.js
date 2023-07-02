import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import trash from '../assets/lixo.svg';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';

import './Carrinho.css';

export function Carrinho() {
    const [meusProdutos, setMeusProdutos] = useState([]);

    const getMeusProdutos = () => setMeusProdutos([
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            nome: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 3,
            preco: "149,90",
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            nome: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 1,
            preco: "149,90",
        },
    ]);

    const totalPedido = 'R$599,60';

    useEffect(() => {
        getMeusProdutos();
    }, []);

    return (
        <section className="section-carrinho div-column">
            <div className="div-row">
                <h1>Carrinho de compras</h1>
            </div>

            <div className="section-content">
                <div className="info-pedido div-column">
                    <div className="item-content">
                        <div className="title">
                            <span>Meus produtos</span>
                            <button
                                className="yellow"
                                onClick={() => {}}
                            >
                                Limpar carrinho
                            </button>
                        </div>
                        <div className="group-item-pedido">
                            <div className="lista-produto div-column">
                                {meusProdutos.map(produto => (
                                    <div className="item-produto carrinho">
                                        <div className="infos-produto">
                                            <img src={produto.img} alt="Imagem produto"/>

                                            <div className="dados">
                                                <label>{produto.nome}</label>
                                            </div>
                                        </div>
                                        
                                        <div className="acoes">
                                            <div className="qtd">
                                                <button
                                                    className="icon-button"
                                                    onClick={() => {}}
                                                >
                                                    <img className="icon" src={minus} alt="diminuir quantidade" />
                                                </button>
                                               
                                                <span>{produto.quantidade}</span>

                                                <button
                                                    className="icon-button"
                                                    onClick={() => {}}
                                                >
                                                    <img className="icon" src={plus} alt="aumentar quantidade" />
                                                </button>
                                            </div>

                                            
                                            <button 
                                                className="icon-button"
                                                onClick={() => {}}
                                            >
                                                <img className="icon trash" src={trash} alt="aumentar quantidade" />
                                            </button>

                                            <span className="preco-produto">R${produto.preco}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resumo-pedido item-content">
                    <h3>Resumo do pedido</h3>

                    {meusProdutos.map(produto => (
                        <label>{produto.quantidade}x - {produto.nome}</label>
                    ))}
                    
                    <hr />
                    <div className="total">
                        <label>Total</label>
                        <label className="total-price">{totalPedido}</label>
                    </div>

                    <NavLink 
                        className="btn-finalizar"
                        to="/finalizarCompra"
                    >
                        Finalizar compra
                    </NavLink>
                </div>
            </div>
        </section>
    );
}