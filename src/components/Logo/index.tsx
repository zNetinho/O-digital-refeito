import React from "react";
import logo from "../../assets/img/LogoOD1.svg";
import './Logo.scss'

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da Empresa" />
    </div>
  );
}
