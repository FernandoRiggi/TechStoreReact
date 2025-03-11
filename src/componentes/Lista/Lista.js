import React from "react";
import './Lista.css';
const Lista = (props) => {
    return (
        <div className="lista">
            <h2>Lista de Produtos</h2>
            
            {props.objetos.map((objeto, index) => (
                <div key={index}>
                    <strong>Nome:</strong> {objeto.secao} {objeto.marca} ({objeto.nome})<br />
                    <strong>Preço:</strong> {objeto.preco}<br />
                    <strong>Estado:</strong> {objeto.estadoProduto || "Não especificado"}<br />
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default Lista;