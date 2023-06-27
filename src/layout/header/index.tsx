import React from "react";
import Menu from "../../components/Menu";
import Logo from "../../components/Logo";
import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className="header">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}
