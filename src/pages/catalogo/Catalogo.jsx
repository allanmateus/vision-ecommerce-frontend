import React, { useEffect, useState } from 'react'
import Form from '../../components/form/Form';
import Table from '../../components/table/Table';

function Catalogo() {
  const product = {
    description: '',
    brand: '',
    color: '',
    category: '',
    price: 0
  }
  
  const [objProduct, setObjProduct] = useState(product); 
  const [products, setProducts] = useState([]);
  
  const selecionarProduto = (indice) =>{
    setObjProduct(products[indice]);
  }

  const limparFormulario = () =>{
    setObjProduct(product);
  }
  //Cadastrar produto
  const cadastrar = (e) =>{
    fetch("http://localhost:8080/products",{
      method:'post',
      body:JSON.stringify(objProduct),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(res => res.json())
    .then(res_json =>{
      
      if(res_json.mensagem !== undefined){
        alert(res_json.mensagem)
      }else{
        setProducts([...products, res_json])
        alert('Produto cadastrado com sucesso!');
        limparFormulario();
      }
    })
  }

  // eslint-disable-next-line
  const onType = (e) =>{
    setObjProduct({...objProduct, [e.target.name]:e.target.value})
  }

  const remover = () =>{
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
        return p.codigo === objProduct.idProduct;
      });

      vetorTemp.splice(indice, 1);

      setProducts(vetorTemp);

      limparFormulario();

    })
  }

  useEffect(() =>{
    fetch("http://localhost:8080/products")
    .then(res => res.json())
    .then(res_json => setProducts(res_json));
  }, []);

  return (
    <div className='container'>
      <div className='mt-3 text-start'>
        <div className='row d-flex'>
          <div className='col'>
            <h4 className='mb-3'>Catálogo de produtos</h4> 
          </div>
        </div>
        <Form  eventoTeclado={onType} cadastrar={cadastrar} obj={objProduct} />
        <Table vetor={products} selecionar={selecionarProduto} remover={remover}/>
      </div>
    </div>
  )
}

export default Catalogo