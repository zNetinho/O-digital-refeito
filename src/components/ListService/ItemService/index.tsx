import './ItemService.scss';
import box1 from "../../../assets/img/box-azul.svg";
import box2 from "../../../assets/img/box-laranja.svg";
import box3 from "../../../assets/img/box-rosa.svg";
import box4 from "../../../assets/img/box-verde.svg";

import check from "../../../assets/img/icon-check.svg";

const strokeColors = ['#FF863E', '#FE31A2','#54E252']
var color0 = strokeColors[0];
var color1 = strokeColors[1];
var color2 = strokeColors[2];

export default function ItemService() {
  return (
    <div className='services'>
      <div className="item__service">
        <i>
          <img src={check} alt="" className="check-icon"/>
        </i>
        <div className="item__service__texto">
          <h2>Create Idea Business</h2>
          <p>Quis vestibulum diam vitae eget dissd.</p>
        </div>
        <img src={box2} alt="" />
      </div>
      <div className="item__service">
        <i>
          <img src={check} alt="" className="check-icon"/>
        </i>
        <div className="item__service__texto">
          <h2>Smart Solutions</h2>
          <p>Quis vestibulum diam vitae eget dissd.</p>
        </div>
        <img src={box1} alt="" />
      </div>
      <div className="item__service">
        <i>
          <img src={check} alt="" className="check-icon"/>
        </i>
        <div className="item__service__texto">
          <h2>Free Support 24 hours</h2>
          <p>Quis vestibulum diam vitae eget dissd.</p>
        </div>
        <img src={box3} alt="" />
      </div>

      <div className="item__service">
        <i>
          <img src={check} alt="" />
        </i>
        <div className="item__service__texto">
          <h2>Business analysis</h2>
          <p>Quis vestibulum diam vitae eget dissd.</p>
        </div>
        <img src={box4} alt="" />
      </div>
    </div>
  );
}
