import React, { useState } from "react";
import cl from "./StepCard.module.css";
import minus from "../../../assets/icons/Minus icon.svg";
import plus from "../../../assets/icons/Plus icon.svg";

export default function StepCard({step, title, details}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <details
        className={cl.detailsContainer}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary className={cl.summaryContainer}>
          <div className={cl.summary}>
            <span>{step}</span>
            <h3>{title}</h3>
          </div>
          <span className={cl.button}>
            <img
              src={isOpen ? minus : plus}
              alt={isOpen ? "Collapse" : "Expand"}
            />
          </span>
        </summary>
        <div>
          <p className={cl.textDetails}>
            {details}
          </p>
        </div>
      </details>
    </>
  );
}
