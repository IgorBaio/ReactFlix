import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
   const valoresIniciais ={
      nome:'',
      descricao:'',
      cor:'',
   }
   const [categorias, setCategorias] = useState([{nome:'Teste'}]);
   const [values, setValues] = useState(valoresIniciais);
   

   const setValue = (chave, valor) =>{
      setValues({
         ...values,
         [chave]:valor,
      })
   }

   function handleChange(event) {
      setValue(
         event.target.getAttribute('name'),
         event.target.value
      );
   }

   return (
      <PageDefault>
         <h1>Cadastro de Categoria: {values.nome}</h1>

         <form onSubmit={function handleSubmit(event){
               event.preventDefault()
               setCategorias([...categorias,values])
               setValues(valoresIniciais)
            }}>

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
               inputType="input"
               type="textarea"
               name="descricao"
               value={values.descricao}
               onChange={handleChange}
            />

             <div>
               <label>
                     Descrição:{' '}
                     <textarea type="text"
                     value={values.descricao} 
                     name="descricao"
                           onChange={handleChange}
                        />
               </label>
            </div>

            <FormField 
               label="Cor:"
               inputType="input"
               type="color"
               name="cor"
               value={values.cor}
               onChange={handleChange}
            />
            {/*<div>
               <label>
                     Cor:
                     <input type="color" 
                     value={values.cor}
                     name="cor"
                           onChange={handleChange}
                        />
               </label>
            </div> */}
            

            <button >
               Cadastrar
            </button>
         </form>
         <ul>
            {categorias.map((categoria,indice)=>{
               return (
                  <li key={`${categoria}${indice}`}>{categoria.nome}</li>
               )
            })}
         </ul>
         <Link to="/" >
            Ir para Home
         </Link>
      </PageDefault>
   )
 }


export default CadastroCategoria;