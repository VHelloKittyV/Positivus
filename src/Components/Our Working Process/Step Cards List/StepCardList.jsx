import React from "react";
import StepCard from "../Step Card/StepCard"
import cl from "./StepaCardList.module.css"
export default function StepCardList() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      details:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      step: "02",
      title: "Research and Strategy Development",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.",
    },
    {
      step: "03",
      title: "Implementation",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.",
    },
    {
      step: "04",
      title: "Monitoring and Optimization",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.",
    },
    {
      step: "05",
      title: "Reporting and Communication",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.",
    },
    {
      step: "06",
      title: "Continual Improvement",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.",
    },
  ];

  return (
    <div className={cl.listContainer}>
      {steps.map((item, index) => (
        <div key={index}>
          <h3 className={cl.visuallyHidden}>{item.title}</h3> 
          <StepCard
            step={item.step}
            title={item.title}
            details={item.details}
          />
        </div>
      ))}
    </div>
  );
}
