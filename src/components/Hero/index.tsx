import React from "react";
import imgBanner from "../../assets/img/img-hero.svg";
import arrow from "../../assets/img/Group 1000001780.svg";
import play from "../../assets/img/Play.svg";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__right">
        {/* Texto e botões */}
        <h2 className="hero__texto">
          Best Solution For Your{" "}
          <span className="caixa">
            Business
            <span className="quadrado-canto superior-esquerdo" />
            <span className="quadrado-canto superior-direito" />
            <span className="quadrado-canto inferior-esquerdo" />
            <span className="quadrado-canto inferior-direito" />
          </span>
          Startup
        </h2>
        <p className="hero__sub-texto">
          Pellentesque non pretium sem. Sed sit amet diam vitae tortor mattis
          tincidunt et at neque.
        </p>
        <div className="wrapper__btn">
          <button className="btn-start">
            Get Started{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          <button className="btn__play">
            <i>
              <img src={play} alt="" />
            </i>
          </button>
        </div>
      </div>
      <div>
        {/* Imagem */}
        <img src={imgBanner} alt="" />
      </div>
    </section>
  );
}
