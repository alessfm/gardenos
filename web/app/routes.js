import React from "react";
import { Routes, Route } from 'react-router-dom';

import Cadastro from './src/public/pages/cadastro/cadastro';
import './App.css'

export default function Rotas() {
  return (
    <Routes>
      {/* <Route path="/" element={<Inicio />} /> */}
      <Route path="cadastro" element={<Cadastro />} />
      {/* <Route element={NotFound} /> */}
    </Routes>
  )
}
