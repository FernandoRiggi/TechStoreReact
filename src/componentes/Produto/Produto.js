const Produto = ({ nome, preco, marca, marcas, estadoProduto }) => {
    const imagemMarca = marcas[marca];
    return (
        <div className="produto">
            <div className="cabecalho">
                {imagemMarca ? (
                    <img
                        src={imagemMarca}
                        alt={`Logo da marca ${marca}`}
                        onError={(e) => e.target.src = "/imagens/default-logo.png"} 
                    />
                ) : (
                    <p>Imagem não encontrada</p>
                )}
            </div>

            <div className="rodape">
                <h2>{nome}</h2>
                <h2>R$ {preco}</h2>
                <h2>{estadoProduto || "Estado não especificado"}</h2> 
            </div>
        </div>
    );
};

export default Produto