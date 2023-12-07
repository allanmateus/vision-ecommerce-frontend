import React from "react";
import grupoPessoas from "../../assets/img/grupo-pessoas.jpg"


function Inicial() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100 py-4">
        <div className="align-middle">
          <h1 className="mb-2">Seja muito bem-vindo(a), colaborador(a)!</h1>
          <h5>Vamos juntos oferecer os melhores produtos pelos menores preços aos nossos clientes.<br/> A excelência no atendimento é o nosso padrão.</h5>
          <img src={grupoPessoas} className="w-50 mt-3 shadow-sm img-thumbnail" alt="grupo de pessoas reunido à noite" />
        </div>
      </div>
    </div>
  )
}

export default Inicial

