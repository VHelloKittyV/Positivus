import React from "react";
import cl from "./TeamCard.module.css";
import socialIcon from "../../../assets/icons/Social icon.svg";

export default function TeamCard({
  name,
  profileImg,
  position,
  link,
  experience,
}) {
  return (
    <div className={cl.cardContainer}>
      <div>
        <div className={cl.cardProfile}>
          <div>
            <img src={profileImg} alt={name} />
          </div>
          <div className={cl.name}>
            <h4>{name}</h4>
            <span>{position}</span>
          </div>
          <div className={cl.social}>
            <a href={link}>
              <img src={socialIcon} alt="linkedIn" />
            </a>
          </div>
        </div>
        <div className={cl.experience}>
          <p>{experience}</p>
        </div>
      </div>
    </div>
  );
}
