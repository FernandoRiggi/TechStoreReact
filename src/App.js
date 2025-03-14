import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Secao from "./componentes/Secao/Secao";


function App() {

  const marcas = {
    HP: "/imagens/HPlogo.png",
    DELL: "/imagens/DELLlogo.png",
    Positivo: "/imagens/positivo.png",
    Asus: "/imagens/asus.png",
    "Xing Ling": "/imagens/xingling.png"
  };
  const secoes = [
    {
      nome: 'Computadores',
      corPrimaria: '#000000',
      corSecundaria: '#ADD8E6'
    },
    {
      nome: 'Acessórios',
      corPrimaria: '#000000',
      corSecundaria: '#87CEEB'
    },
    {
      nome: 'Impressoras',
      corPrimaria: '#000000',
      corSecundaria: '#0000FF'
    },
    {
      nome: 'Games',
      corPrimaria: '#000000',
      corSecundaria: '#1E3A5F'
    },
    {
      nome: 'Gadgets',
      corPrimaria: '#000000',
      corSecundaria: '#00008B'
    }
  ]

  const listaSecoes = secoes.map(secao => secao.nome)
  const [produtos, setProdutos] = useState([])

  const adicionaProduto = (produto) => {
    const listaNova = produtos.slice();
    listaNova.push(produto);
    setProdutos(listaNova);
  };
  const produtosPorSecao = secoes.map(secao => ({
    ...secao,
    produtos: produtos.filter(produto => produto.secao === secao.nome)
  }));

  return (
    <div >
      <Banner />
      <Formulario secoes={listaSecoes} aoProdutoCadastrado={produto => adicionaProduto(produto)} />

      {secoes.map(secao => {
        const filteredProducts = produtos.filter(produto => produto.secao === secao.nome);
        console.log(`Products for section ${secao.nome}:`, filteredProducts);
        return <Secao
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={filteredProducts}
          marcas={marcas}
        />;
      })}

    </div>
  );
}

export default App;
