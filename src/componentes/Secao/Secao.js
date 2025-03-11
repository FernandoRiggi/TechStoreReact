import React from "react";
import './Secao.css';
import Produto from "../Produto/Produto";

const Secao = (props) => {
    console.log("Produtos recebidos em Secao:", props.produtos);
    const corDeFundo = {
        backgroundColor: props.corSecundaria
    }

    const corSublinhado = {
        borderColor: props.corPrimaria
    }
    return (

        (props.produtos.length > 0) ? <section className="secao" style={corDeFundo}>
            <h3 style={corSublinhado}>{props.nome}</h3>

            <div className="produtos">

                {props.produtos.map(produto => {
                    console.log("Produto individual em Secao:", produto);
                    return <Produto
                        key={produto.nome}
                        nome={produto.nome}
                        preco={produto.preco}
                        marca={produto.marca}
                        marcas={props.marcas}
                        estadoProduto={produto.estadoProduto}
                    />;
                })}
            </div>
        </section>

            : ''
    )
}

export default Secao;