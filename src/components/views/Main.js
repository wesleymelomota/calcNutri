import React from "react";
import './main.style.css';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-container d-flex flex-column">
      <div className="intro-section">
        <h1 className="welcome-heading">Bem-vindo à NutriCalc</h1>
        <p className="welcome-text">
          Sua ferramenta de cálculo nutricional de confiança. A NutriCalc permite que você realize cálculos precisos com base em fórmulas científicas, como Harris-Benedict, Mifflin-St Jeor, Jackson-Pollock e muito mais, tudo ao alcance de um clique.
        </p>
        <Link to={`calculo-tmb`}> <button className="start-button">Começar Agora</button></Link>
      </div>
      
      <div className="features-section">
        <h2 className="features-heading">Funcionalidades</h2>
        <ul className="features-list">
          <li>Calculadora de Metabolismo Basal</li>
          <li>Estimação de Gordura Corporal com Jackson-Pollock</li>
          <li>Cálculos personalizados com base na equação de Mifflin-St Jeor</li>
          <li>Fácil visualização de resultados</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
