import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/" className='text-bolder text-dark text-decoration-none me-2'><h4>VISION Store <small className='text-danger'>| Backoffice </small></h4></Link>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active" aria-current="page">
                Página inicial
              </Link>
              <Link to="/catalogo" className="nav-link active">
                Catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>  
    </nav>
  )
}

export default Header