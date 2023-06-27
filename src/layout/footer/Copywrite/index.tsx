import React from "react";
import icon1 from '../../../assets/icons/facebook.svg';
import icon2 from '../../../assets/icons/twitter.svg';
import icon3 from '../../../assets/icons/instagram.svg';
import './Copywrite.scss'

const ano = new Date().getFullYear();

console.log(ano)

export default function Copywrite() {
  return (
    <div className="footer__copywrite">
      <div className="column__footer">
        © {ano} All rights Reserved
      </div>
      <div className="column__footer">
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
      </div>
    </div>
  );
}
