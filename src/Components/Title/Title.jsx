import React from "react";
import "./Title.css"
export default function Title({ title, subTitle }) {
  return (
    <div className="titleConatainer">
      <h2 className="title">{title}</h2>
      <p className="subTitle">{subTitle}</p>
    </div>
  );
}
