import './App.css';
import Inicial from './pages/inicial/Inicial';
import Header from './components/header/Header';
import Cadastro from './pages/cadastro/Cadastro';
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Inicial/>}  /> 
          <Route path="/cadastro" element={<Cadastro/>}  />
        </Routes>
    </div>
  );
}

export default App;
