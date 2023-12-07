import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Cadastro from '../cadastro/Cadastro';


function Catalogo() {
  const [products, setProducts] = useState([]); 


  const remover = (e) =>{
    e.preventDefault();
    fetch("http://localhost:8080/products/"+products.idProduct,{
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(res => res.json())
    .then(res_json =>{
      alert(res_json.mensagem)
      
      let vetorTemp = [...products];


      let indice = vetorTemp.findIndex((p) => {
        return p.codigo === Cadastro.objProduct.idProduct;
      });

      vetorTemp.splice(indice, 1);

      setProducts(vetorTemp);

    })
  }

  useEffect(() =>{
    fetch("http://localhost:8080/products")
    .then(res => res.json())
    .then(res_json => setProducts(res_json));
  }, []);

  return (
    <div className='container'>
      <div className='mt-5 text-start'>
        <div className='row d-flex'>
          <div className='col'>
            <h3 className='mb-5'>Catálogo de produtos</h3> 
          </div>
          <div className='col'>
            <Link to='/cadastro' className="btn btn-primary float-end">Cadastrar um novo produto</Link>       
          </div>
        </div>
        <table className="table">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Id</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Cor</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Preço (R$)</th>
                  <th scope="col">Ações</th>
              </tr>
          </thead>
          <tbody>
              {
                products.map((obj, indice) =>(
                    <tr key={indice}>
                        <td>{indice + 1}</td>
                        <td>{obj.idProduct}</td>
                        <td>{obj.description}</td>
                        <td>{obj.brand}</td>
                        <td>{obj.color}</td>
                        <td>{obj.category}</td>
                        <td>{obj.price}</td>
                        <td>
                        <button type="button" className="btn btn-sm btn-warning me-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path>
                            </svg>
                        </button>
                        <button type="button" className="btn btn-sm btn-danger me-1" onClick={remover}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
                            </svg>
                        </button>
                        </td>
                    </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Catalogo