import React from 'react'

function Form({botao, eventoTeclado, obj, cadastrar}) {
  return (
    <form className='row d-flex flex-wrap text-start mt-3'>
        <h4 className='mb-3'>Produtos</h4>
        <div className='row d-flex flex-wrap'>
          <div className="col mb-1">
            <label htmlFor="description" className="form-label">Descrição</label>
            <input onChange={eventoTeclado}  type="text"  className="form-control"  name = "description" id="description"></input>
          </div>
          <div className="col-2 mb-1">
            <label htmlFor="brand" className="form-label">Marca</label>
            <input onChange={ eventoTeclado}  type="text"  className="form-control"  name = "brand" id="brand"></input>
          </div>
          <div className="col-2 mb-1">
            <label htmlFor="color" className="form-label">Cor</label>
            <input onChange={ eventoTeclado}  type="text"  className="form-control"  name = "color" id="color"></input>
          </div>
          <div className="col-3 mb-1">
            <label htmlFor="category" className="form-label">Categoria</label>
            <select onChange={ eventoTeclado}  className="form-select" name="category" id="category">
              <option hidden defaultValue>Selecione a categoria</option>
              <option value="Roupas">Roupas</option>
              <option value="Calçados">Calçados</option>
              <option value="Acessórios">Acessórios</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div className="col-2 mb-1">
            <label htmlFor="price" className="form-label">Preço (R$)</label>
            <input onChange={ eventoTeclado} type="text" className="form-control"  name = "price" id="price"></input>
          </div>
        </div>
        <div className='row mt-2'>
          {
            botao
            ?
            <div className='col'>
              <button type="submit" onClick={cadastrar}  value="cadastrar" className="btn btn-success float-end">Cadastrar</button>
            </div>
            :
            <div></div>  
          }
        </div>
    </form>
  )
}

export default Form