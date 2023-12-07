import React, {useState} from 'react'
function Cadastro() {
  const product = {
    description: '',
    brand: '',
    color: '',
    category: '',
    price: 0
  }

  const [products, setProducts] = useState([]);

  //Cadastrar produto
  const cadastrar = (e) =>{
    e.preventDefault();
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

  const limparFormulario = () =>{
    setObjProduct(product);
  }

  // eslint-disable-next-line
  const [objProduct, setObjProduct] = useState(product); 
  const onType = (e) =>{
    setObjProduct({...objProduct, [e.target.name]:e.target.value})
  }
  return (
    <div className='container'>
      <form className='row d-flex flex-wrap text-start mt-5'>
        <h3 className='mb-5'>Cadastro de produtos</h3>

        <div className='row d-flex flex-wrap'>
          <div className="col mb-3">
            <label htmlFor="description" className="form-label">Descrição</label>
            <input onChange={onType} type="text" className="form-control"  name = "description" id="description"></input>
          </div>
          <div className="col mb-3">
            <label htmlFor="brand" className="form-label">Marca</label>
            <input onChange={onType} type="text" className="form-control"  name = "brand" id="brand"></input>
          </div>
        </div>
        <div className='row d-flex flex-wrap'>
          <div className="col mb-3">
            <label htmlFor="color" className="form-label">Cor</label>
            <input onChange={onType} type="text" className="form-control"  name = "color" id="color"></input>
          </div>
          <div className="col mb-3">
            <label htmlFor="category" className="form-label">Categoria</label>
            <select onChange={onType} className="form-select" name="category" id="category">
              <option hidden defaultValue>Selecione a categoria</option>
              <option value="Roupas">Roupas</option>
              <option value="Calçados">Calçados</option>
              <option value="Acessórios">Acessórios</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div className="col mb-3">
            <label htmlFor="price" className="form-label">Preço (R$)</label>
            <input onChange={onType} type="text" className="form-control"  name = "price" id="price"></input>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button type="submit" onClick={cadastrar}  value="cadastrar" className="btn btn-success float-end">Cadastrar</button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default Cadastro