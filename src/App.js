import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import SumaMultiplicacion from "./components/calculadora";
import GradosCF from "./components/gradosCF";
import Formulario from "./components/formulario";
export function App() {
    return (
        <BrowserRouter>
            <div>
                <Menu></Menu>
                <Routes>
                    <Route path="/calculadora" element={<SumaMultiplicacion />} />
                    <Route path="/gradosCF" element={<GradosCF />} />
                    <Route path="/formulario" element={<Formulario />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
