import React, { useEffect, useState } from "react";
import './HomeCliente.css';

export function HomeCliente() {
    const [status, setStatus] = useState("produtos");
    const [meusProdutos, setMeusProdutos] = useState([]);
    const handleSetProdutos = () => setStatus("produtos");


    const getMeusProdutos = () => setMeusProdutos([
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            descricao: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 12,
            preco: "149,90",
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            descricao: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 12,
            preco: "149,90",
            
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            descricao: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 12,
            preco: "149,90",

        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            descricao: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 12,
            preco: "149,90",
            
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            descricao: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 12,
            preco: "149,90",
            
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            descricao: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 0,
            preco: "149,90",
            
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            descricao: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            quantidade: 1,
            preco: "149,90",
            
        },
    ]);


    useEffect(() => {
        getMeusProdutos();
    }, []);

    return (
        <section className="section-admin div-column">
            <div className="div-row">
            <h1 style={{
  color: '#6283FA',
  fontSize: '24px',
  fontWeight: 'bold'
}}>Produtos mais pedidos</h1>

            </div>

          

            <section className="section-content">
                    <div className="cliente-produto div-row">
                        {meusProdutos.map(produto => ( produto.quantidade > 0 &&
                            <div className="item-produto">
                                <div className="infos-produto">
                                    <img src={produto.img} alt="Imagem produto"/>

                                    <div className="dados">

                                        
                                        <label  className="label-with-ellipsis" title={produto.descricao}>{produto.descricao}</label>

                                        <div>

                                            <span className="preco"> R${produto.preco}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
        </section>
        </section>
    );
}