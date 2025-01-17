import React from "react";
import cl from "./Card.module.css";


export default function Card({title1, title2,icon, img, bg, titleBg, color}) {
  return (
    <div className={cl.cardContainer} style={bg}>
      <div className={cl.cardTitleContainer}>
        <h3 className={cl.cardTitle}>
          <span style={titleBg}>{title1}</span>
          <span style={titleBg}>{title2}</span>
        </h3>

        <a className={cl.learnMore} href="/">
          <span>
            <img src={icon} alt="learn more" />
          </span>
          <p className={cl.hidden} style={color}>Learn more</p>
        </a>
      </div>
      <div className={cl.cardImage}>
        <img src={img} alt="search" />
      </div>
    </div>
  );
}
