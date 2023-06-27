import logo2 from "../../assets/img/logo-2.svg";
import logo3 from "../../assets/img/logo-3.svg";
import logo4 from "../../assets/img/logo-4.svg";
import logo5 from "../../assets/img/logo-5.svg";
import star from "../../assets/img/Group.svg";
import Partnar from "./Partnar";
import './ListPartnar.scss'

const logos = [logo4, logo3, logo2, logo5];

export default function ListaPartnar() {
  return (
    <div className="container__list__partnar">
      <div className="title">
        <h2 className="title__text">Our Partnar</h2>
      </div>
      <ul className="list__partnar">
        {logos.map((logo, idx) => <Partnar key={idx} logo={logo} />)}
      </ul>
      <div className="list__rating">
        <h3 className="list__rating__number">4.7K</h3>
        <img src={star} alt="" />
        <p>1,938 Rating</p>
        <p className="list__rating__text">Satisfy Client</p>
      </div>
    </div>
  );
}
