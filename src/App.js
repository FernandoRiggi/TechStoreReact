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
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Acessórios',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Impressoras',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Games',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Gadgets',
      corPrimaria: '#9b59b6',
      corSecundaria: '#f0e6f7'
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
