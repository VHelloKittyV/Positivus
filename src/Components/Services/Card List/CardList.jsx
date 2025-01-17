import React from "react";
import cl from "./CardList.module.css";
import Card from "../Card/Card";

import iconBlack from "../../../assets/icons/IconBlack.svg";
import iconWhite from "../../../assets/icons/IconWhite.svg";
import search from "../../../assets/cardImages/search.svg";
import click from "../../../assets/cardImages/click.svg";
import social from "../../../assets/cardImages/social.svg";
import mail from "../../../assets/cardImages/mail.svg";
import content from "../../../assets/cardImages/content.svg";
import analytic from "../../../assets/cardImages/analytic.svg";

const cardData = [
  {
    bg: { backgroundColor: "var(--color-grey)" },
    titleBg: { backgroundColor: "var(--color-green)" },
    title1: "Search engine",
    title2: "optimization",
    icon: iconBlack,
    img: search,
  },
  {
    bg: { backgroundColor: "var(--color-green)" },
    titleBg: { backgroundColor: "var(--color-white)" },
    title1: "Pay-per-click",
    title2: "advertising",
    icon: iconBlack,
    img: click,
  },
  {
    bg: { backgroundColor: "var(--color-dark)" },
    titleBg: { backgroundColor: "var(--color-white)" },
    title1: "Social Media",
    title2: "Marketing",
    color: { color: "var(--color-white)" },
    icon: iconWhite,
    img: social,
  },
  {
    bg: { backgroundColor: "var(--color-grey)" },
    titleBg: { backgroundColor: "var(--color-green)" },
    title1: "Email",
    title2: "Marketing",
    icon: iconBlack,
    img: mail,
  },
  {
    bg: { backgroundColor: "var(--color-green)" },
    titleBg: { backgroundColor: "var(--color-white)" },
    title1: "Content",
    title2: "Creation",
    icon: iconBlack,
    img: content,
  },
  {
    bg: { backgroundColor: "var(--color-dark)" },
    titleBg: { backgroundColor: "var(--color-white)" },
    title1: "Analytics and",
    title2: "Tracking",
    color: { color: "var(--color-white)" },
    icon: iconWhite,
    img: analytic,
  },
];

export default function CardList() {
  return (
    <div className={cl.cardListContainer}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          bg={card.bg}
          titleBg={card.titleBg}
          title1={card.title1}
          title2={card.title2}
          color={card.color}
          icon={card.icon}
          img={card.img}
        />
      ))}
    </div>
  );
}
