import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import EstadoProduto from "../EstadoProduto/EstadoProduto";

const Formulario = (props) => {


    const marcas = [
        'HP',
        'DELL',
        'Positivo',
        'Asus',
        'Xing Ling'

    ]

    const [secao, setSecao] = useState('')
    const [marca, setMarca] = useState('')
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [estadoProduto, setEstadoProduto] = useState('')

    const aoAlterarEstadoProduto = (evento) => {
        setEstadoProduto(evento.target.value);
    }

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi sumetido', secao, marca, nome, preco, estadoProduto)
        if (!secao || !marca || !nome || !preco || !estadoProduto) {
            alert("Por favor, preencha todos os campos.");
            return;
            }
        props.aoProdutoCadastrado(
            {
                "secao" : secao,
                "marca" : marca,
                "nome" : nome,
                "preco" : preco,
                "estadoProduto" : estadoProduto
            }
        )
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do produto:</h2>
                <ListaSuspensa 
                    label="Seção:"
                    itens={props.secoes}
                    valor={secao}
                    aoAlterado={valor => setSecao(valor)}
                />
                <ListaSuspensa
                    label="Marcas:"
                    itens={marcas}
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                />
                <CampoTexto
                    label="Nome:"
                    placeholder="Digite o nome do produto"
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Preço:"
                    placeholder="Digite o preço do produto"
                    aoAlterado={valor => setPreco(valor)}
                />
                <EstadoProduto
                    estadoProduto={estadoProduto}
                    aoAlterarEstadoProduto={aoAlterarEstadoProduto}
                />
                <Botao> Inserir Produto </Botao>
            </form>
        </section>
    )
}
export default Formulario;
