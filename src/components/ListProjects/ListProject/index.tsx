import React from "react";
import "./ListProject.scss";

export default function ListProject({
  icon,
  title,
  onClick,
  isSelected
}: any) {
  return (
    <div className="wrapper__list__item">
      <div
        className={`list-item ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      >
        <img src={icon} alt="" />
        <span className="title">
          {title}
        </span>
      </div>
        
    </div>
  );
}
