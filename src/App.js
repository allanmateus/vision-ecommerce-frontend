import './App.css';
import Inicial from './pages/inicial/Inicial';
import Header from './components/header/Header';
import Cadastro from './pages/cadastro/Cadastro';
import Catalogo from './pages/catalogo/Catalogo';
import { Route, Routes } from "react-router-dom";
import React from "react";
import RotaDesconhecida from './pages/erro/RotaDesconhecida';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Inicial/>}  /> 
        <Route path="/cadastro" element={<Cadastro/>}  />
        <Route path="/catalogo" element={<Catalogo/>}  />
        <Route path="*" element={<RotaDesconhecida/>}  />
      </Routes>
    </div>
  );
}

export default App;
