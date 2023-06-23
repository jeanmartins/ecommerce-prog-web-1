import React, { useEffect, useState } from "react";

import { Input } from "../components/Input";

import './HomeAdmin.css';

export function HomeAdmin() {
    const [status, setStatus] = useState("produtos");
    const [meusProdutos, setMeusProdutos] = useState([]);
    const [minhasCategorias, setMinhasCategorias] = useState([]);

    const handleSetProdutos = () => setStatus("produtos");
    const handleSetCategorias = () => setStatus("categorias");
    const handleSetCompras = () => setStatus("compras");
    const handleSetRelatorios = () => setStatus("relatorios");

    const handleSetAddProduto = () => setStatus("addProduto");
    const handleSetAddCategoria = () => setStatus("addCategoria");

    const handleSetEditProduto = () => {
        // quero pegar o id do elemento clicado 
        // passar as informações para "editar Produto" de acordo com o id
        // só depois atualizar o status

        setStatus("editProduto");
    }

    const handleSetEditCategoria = () => {
        // quero pegar o id do elemento clicado 
        // passar as informações para "editar Categoria" de acordo com o id
        // só depois atualizar o status

        setStatus("editCategoria");
    }

    const getMeusProdutos = () => setMeusProdutos([
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            nome: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            descricao: `- Indicada para cães adultos; 
- Redução do odor das fezes, seleção de ingredientes especiais que auxiliam na redução do odor das fezes;
- Blend de proteínas, máxima satisfação para o paladar;
- Maior rendimento, ingredientes de alto aproveitamento;
- Saúde e vitalidade, alimento de alta qualidade, rico em vitaminas e minerais;`,
            quantidade: 12,
            preco: "149,90",
            categorias: ["cachorro", "ração"],
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            nome: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            descricao: `- Indicada para cães adultos; 
- Redução do odor das fezes, seleção de ingredientes especiais que auxiliam na redução do odor das fezes;
- Blend de proteínas, máxima satisfação para o paladar;
- Maior rendimento, ingredientes de alto aproveitamento;
- Saúde e vitalidade, alimento de alta qualidade, rico em vitaminas e minerais;`,
            quantidade: 12,
            preco: "149,90",
            categorias: ["cachorro", "ração"],
        },
        {
            img: "https://cobasi.vteximg.com.br/arquivos/ids/939212/racao-golden-formula-caes-adultos-racas-pequenas-frango-arroz-mini-bits-3626279-1kg.jpg?v=638127640641870000",
            nome: "Ração Golden Fórmula Mini Bits para Cães Adultos de Porte Pequeno Sabor Frango e Arroz",
            descricao: `- Indicada para cães adultos; 
- Redução do odor das fezes, seleção de ingredientes especiais que auxiliam na redução do odor das fezes;
- Blend de proteínas, máxima satisfação para o paladar;
- Maior rendimento, ingredientes de alto aproveitamento;
- Saúde e vitalidade, alimento de alta qualidade, rico em vitaminas e minerais;`,
            quantidade: 12,
            preco: "149,90",
            categorias: ["cachorro", "ração"],
        },
    ]);

    const getMinhasCategorias = () => setMinhasCategorias([
        {
            nome: 'cachorro',
            subcategoria: ['ração', 'higiene']
        },
        {
            nome: 'cachorro',
            subcategoria: ['ração', 'higiene']
        },
        {
            nome: 'cachorro',
            subcategoria: ['ração', 'higiene']
        }
    ]);

    useEffect(() => {
        getMeusProdutos();
        getMinhasCategorias();
    }, []);

    return (
        <section className="section-admin div-column">
            <div className="div-row">
                <h1>Base de Produtos</h1>
                <span className="admin">admin</span>
            </div>

            <div className="div-menu">
                <div className="group-btn">
                    <button 
                        className="item-menu"
                        id={status === "produtos" | status === "addProduto" | status === "editProduto" ? "selected" : null}
                        onClick={handleSetProdutos}
                    >
                        Produtos
                    </button>

                    <button 
                        className="item-menu"
                        id={status === "categorias" || status === "addCategoria" | status === "editCategoria" ? "selected" : null}
                        onClick={handleSetCategorias}
                    >
                        Categorias
                    </button>

                    <button 
                        className="item-menu"
                        id={status === "compras" ? "selected" : null}
                        onClick={handleSetCompras}
                    >
                        Compras
                    </button>

                    <button 
                        className="item-menu"
                        id={status === "relatorios" ? "selected" : null}
                        onClick={handleSetRelatorios}
                    >
                        Relatórios
                    </button>
                </div>

                {status === "produtos" && 
                    <button
                        className="btn-secondary"
                        onClick={handleSetAddProduto}
                    >
                        Adicionar produto
                    </button>
                }   

                {status === "categorias" && 
                    <button 
                        className="btn-secondary"
                        onClick={handleSetAddCategoria}
                    >
                        Adicionar categoria
                    </button>
                }          
            </div>

            <section className="section-content">
                {status === "produtos" &&
                    <div className="lista-produto div-column">
                        {meusProdutos.map(produto => (
                            <div className="item-produto">
                                <div className="infos-produto">
                                    <img src={produto.img} alt="Imagem produto"/>

                                    <div className="dados">
                                        <div className="categorias">
                                            {produto.categorias.map((categoria) => 
                                                <span className="tag">{categoria}</span>
                                            )}
                                        </div>
                                        
                                        <label>{produto.nome}</label>

                                        <div>
                                            <span className="estoque">{produto.quantidade} unidades em estoque</span>
                                            <span className="preco"> | R${produto.preco}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="acoes">
                                    <button 
                                        className="secondary"
                                        id="cta"
                                        onClick={handleSetEditProduto}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className="tertiary"
                                        id="cta"
                                        onClick={() => {}}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {status === "categorias" &&
                    <div className="lista-categoria div-column">
                        {minhasCategorias.map(categoria => (
                            <div className="item-categoria">
                                <div className="infos-categoria div-column">
                                    <span className="tag">{categoria.nome}</span>
                                    <div className="subcategorias"> 
                                        <label>Subcategorias: </label>
                                        {categoria.subcategoria.map(sub => (
                                            <span className="tag sub">{sub}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="acoes">
                                    <button 
                                        className="secondary"
                                        id="cta"
                                        onClick={handleSetEditCategoria}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className="tertiary"
                                        id="cta"
                                        onClick={() => {}}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {status === "editProduto" && 
                    <div className="add">
                        <h3>Editar produto</h3>

                        <div>
                            <Input 
                                id="nome"
                                type="text"
                                label="Nome"
                                placeholder="Digite o nome da categoria"
                                value={meusProdutos[0].nome}
                            /> 
                            
                            <div className="div-inputs div-column">
                                <div className="label-form">
                                    <label for="descricao">Descrição</label>
                                    <label className="required">*</label>
                                </div>

                                <textarea 
                                    id="descricao"
                                    name="descricao"
                                    placeholder="Digite a descrição"
                                    rows={5}
                                    value={meusProdutos[0].descricao}
                                /> 
                            </div>
                            
                            <div className="numbers">
                                <Input 
                                    id="preco"
                                    type="number"
                                    label="Preço"
                                    placeholder="Digite o preco"
                                    step="0.01"
                                    value={meusProdutos[0].preco}
                                />
                                <Input 
                                    id="estoque"
                                    type="number"
                                    label="Estoque"
                                    placeholder="Digite a quantidade do estoque"
                                    value={meusProdutos[0].quantidade}
                                />                  
                            </div>

                            <Input 
                                id="categorias"
                                type="text"
                                label="Categorias"
                                placeholder="Digite as categorias separadas por vírgulas"
                                value={meusProdutos[0].categorias}
                            />               
                        </div>

                        <button
                            className="btn-secondary"
                            type="submit"
                            onClick={() => {}}
                        >
                            Editar produto
                        </button>
                    </div> 
                }

                {status === "editCategoria" &&
                    <div className="add">
                        <h3>Editar categoria</h3>

                        <div>
                            <Input 
                                id="nome"
                                type="text"
                                label="Nome"
                                placeholder="Digite o nome da categoria"
                                value={minhasCategorias[0].nome}
                            />  

                            <Input 
                                id="subcategorias"
                                type="text"
                                label="Subcategorias"
                                placeholder="Digite as subcategorias separadas por vírgulas"
                                value={minhasCategorias[0].subcategoria}
                            />               
                        </div>

                        <button
                            className="btn-secondary"
                            type="submit"
                            onClick={() => {}}
                        >
                            Editar categoria
                        </button>
                    </div>
                }

                {status === "addProduto" && 
                    <div className="add">
                        <h3>Adicionar produto</h3>

                        <div>
                            <Input 
                                id="nome"
                                type="text"
                                label="Nome"
                                placeholder="Digite o nome da categoria"
                            /> 
                            
                            <div className="div-inputs div-column">
                                <div className="label-form">
                                    <label for="descricao">Descrição</label>
                                    <label className="required">*</label>
                                </div>

                                <textarea 
                                    id="descricao"
                                    name="descricao"
                                    placeholder="Digite a descrição"
                                    rows={5}
                                /> 
                            </div>
                            
                            <div className="numbers">
                                <Input 
                                    id="preco"
                                    type="number"
                                    label="Preço"
                                    placeholder="Digite o preco"
                                    step="0.01"
                                />
                                <Input 
                                    id="estoque"
                                    type="number"
                                    label="Estoque"
                                    placeholder="Digite a quantidade do estoque"
                                />                  
                            </div>

                            <Input 
                                id="categorias"
                                type="text"
                                label="Categorias"
                                placeholder="Digite as categorias separadas por vírgulas"
                            />               
                        </div>

                        <button
                            className="btn-secondary"
                            type="submit"
                            onClick={() => {}}
                        >
                            Adicionar produto
                        </button>
                    </div>
                }

                {status === "addCategoria" && 
                    <div className="add">
                        <h3>Adicionar categoria</h3>

                        <div>
                            <Input 
                                id="nome"
                                type="text"
                                label="Nome"
                                placeholder="Digite o nome da categoria"
                            />  

                            <Input 
                                id="subcategorias"
                                type="text"
                                label="Subcategorias"
                                placeholder="Digite as subcategorias separadas por vírgulas"
                            />               
                        </div>

                        <button
                            className="btn-secondary"
                            type="submit"
                            onClick={() => {}}
                        >
                            Adicionar categoria
                        </button>
                    </div>
                } 

                {status === "compras" &&
                    <div>
                        compras
                    </div>
                }

                {status === "relatorios" &&
                    <div>
                        relatorios
                    </div>
                }
            </section>
        </section>
    );
}