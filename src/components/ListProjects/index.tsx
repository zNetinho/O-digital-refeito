import React, { useState } from "react";
import "./OptionList.scss";

import ListProject from "./ListProject";
import rocket from "../../assets/icons/rocket.svg";
import user from "../../assets/icons/user.svg";
import bag from "../../assets/icons/bag.svg";
import grafico from "../../assets/icons/grafico.svg";
import moedas from "../../assets/icons/moedas.svg";
import tempo from "../../assets/icons/tempo.svg";

import vermelha from "../../assets/telas/vermelho.svg";
import azul from "../../assets/telas/azul.svg";
import amarela from "../../assets/telas/amarelo.svg";
import azulEscuro from "../../assets/telas/azul-escuro.svg";
import preta from "../../assets/telas/preto.svg";
import bege from "../../assets/telas/bege.svg";

const options = [
  { id: 1, icon: rocket, title: "Awesome Project" },
  { id: 2, icon: user, title: "Versions from" },
  { id: 3, icon: bag, title: "Publishing Pack" },
  { id: 4, icon: grafico, title: "Vivamus Turpis" },
  { id: 5, icon: moedas, title: "Posuere Maximus" },
  { id: 6, icon: tempo, title: "Consecteur adip" }
];

const images = [
  { id: 1, imagem: vermelha, title: "Awesome Project" },
  { id: 2, imagem: azul, title: "Versions from" },
  { id: 3, imagem: amarela, title: "Publishing Pack" },
  { id: 4, imagem: azulEscuro },
  { id: 5, imagem: preta },
  { id: 6, imagem: bege }
];

const OptionsList = () => {
  const [selectedItemId, setSelectedItemId] = useState(1);

  const handleItemClick = (itemId: any) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="options-list-container">
      <div className="options-list">
        {options.map(option =>
          <ListProject
            key={option.id}
            icon={option.icon}
            title={option.title}
            // image={option.image}
            onClick={() => handleItemClick(option.id)}
            isSelected={option.id === selectedItemId}
          />
        )}
      </div>
      <div className="wrapper__imagem">
        {images.map(image =>
          <div className="image-selected" key={image.id}>
            {selectedItemId == image.id &&
              <img src={image.imagem} alt="" className="image" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionsList;
