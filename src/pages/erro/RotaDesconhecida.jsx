import React from 'react'
import pinguin from '../../assets/img/pinguin-404.gif'
import { Link } from "react-router-dom";

function RotaDesconhecida() {
  return (
    <div className='mt-5 pt-5 container'>
      <div className='row d-flex flex-wrap'>
        <div className='col'>
          <img src={pinguin} className='h-100' alt="" />
        </div>
        <div className='col'>
          <h1 className='mt-5'>Oops... infelizmente, não encontramos essa página.</h1>
          <h3>Acho melhor voltarmos ao início. Que tal?</h3>
          <Link to="/" type="button" className="btn btn-lg btn-primary mt-5">Voltar ao início</Link>
        </div>
      </div>
    </div>
  )
}

export default RotaDesconhecida