import React from 'react'

function Table({vetor, selecionar, remover, obj}) {
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Descrição</th>
                <th scope="col">Marca</th>
                <th scope="col">Cor</th>
                <th scope="col">Categoria</th>
                <th scope="col" className='text-end'>Preço (R$)</th>
                <th scope="col" className='text-end'>Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                vetor.map((obj, indice) =>(
                    <tr key={indice}>
                        <td>
                            <input className="form-check-input"
                              type="radio" name="radioNoLabel"
                              id="radioNoLabel1"
                              onClick={() => {selecionar(indice)}}>
                            </input>
                        </td>
                        <td>{indice + 1}</td>
                        <td>{obj.idProduct}</td>
                        <td>{obj.description}</td>
                        <td>{obj.brand}</td>
                        <td>{obj.color}</td>
                        <td>{obj.category}</td>
                        <td className='text-end'>{obj.price}</td>
                        <td className='text-end'>
                            <button type="button" className="btn btn-sm btn-warning me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path>
                                </svg>
                            </button>
                            <button type="button" className="btn btn-sm btn-danger me-1" value="remover" onClick={remover}>
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
  )
}

export default Table