/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(()=>{
    console.log("Alou");
    const URL = "http://localhost:8080/categorias";
    fetch(URL)
    .then(async (res) => {
        const respost = await res.json()
        setCategorias([
        ...respost,
      ]);
      });
    },[]

  )

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([...categorias, values]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria:"
          inputType="input"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          inputType="textarea"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          inputType="input"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        
        
        <Button as={Button} type="submit">
          Cadastrar
        </Button>

        {categorias.length === 0 && <div>
          Loading...
        </div>}

        <ul>
          {categorias.map((categoria, indice) => (
            <li key={`${categoria}${indice}`}>{categoria.nome}</li>
          ))}
        </ul>

      </form>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
