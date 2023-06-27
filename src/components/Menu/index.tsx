import React from "react";
import "./Menu.scss";

export default function Menu() {
  return (
    <div className="container">
      <div className="list">
        <ul className="list__menu">
          <li className="list__menu__item">
            <a href="#" className="list__menu__item__link">
              Home
            </a>
          </li>
          <li className="list__menu__item">
            <a href="#" className="list__menu__item__link">
              About
            </a>
          </li>
          <li className="list__menu__item">
            <a href="#" className="list__menu__item__link">
              Service
            </a>
          </li>
          <li className="list__menu__item">
            <a href="#" className="list__menu__item__link">
              Team
            </a>
          </li>
          <li className="list__menu__item">
            <a href="#" className="list__menu__item__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="wrapper__btn">
        <button className="btn-starter"><strong>Get A Quote</strong></button>
      </div>
    </div>
  );
}
