import ListaFooter from "../../components/ListFooter";
import Logo from "../../components/Logo";
import arrow from "../../assets/icons/arrow.svg";
import local from "../../assets/icons/localizacao.svg";
import email from "../../assets/icons/email.svg";

import "./Footer.scss";



const itemMenu = [
  { id: 1, anchor: "About Us", url: "#" },
  { id: 2, anchor: "Services", url: "#" },
  { id: 3, anchor: "Blog", url: "#" },
  { id: 4, anchor: "Features", url: "#" }
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__column footer__column__first">
        <Logo />
        <div className="footer__column__subscribe">
          <div className="subcribre__input">
            <input
              type="text"
              placeholder="Enter email"
              className="footer__input-email"
            />
            <span>
              <i>
                <img src={arrow} alt="" />
              </i>
            </span>
          </div>
          <a href="" className="footer__subscribe">
            Subscribe Our Weekly Blog
          </a>
        </div>
      </div>
      <div className="footer__column footer__column__second">
        <h2>Company</h2>
        <ListaFooter itemMenu={itemMenu} />
      </div>
      <div className="footer__column footer__column__third">
        <h2>Support</h2>
        <ListaFooter itemMenu={itemMenu} />
      </div>
      <div className="footer__column footer__column__four">
        <h2>Get In Toch</h2>
        <p>Sed uterspis unde omnis iste lano natus error voluem</p>
        <div className="footer__contact">
          <span>
            <img src={local} alt="" />
          </span>
          <p className="footer__column footer__four__text">
            <a href="#">255 Main street, New york</a>
          </p>
        </div>
        <div className="footer__contact">
          <span>
            <img src={email} alt="" />
          </span>
          <p className="footer__four__text">
            <a href="#">support@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
