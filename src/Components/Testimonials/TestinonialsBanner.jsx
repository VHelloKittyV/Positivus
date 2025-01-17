import React, { useState } from "react";
import arrowRight from "../../assets/icons/Arrow right.svg";
import arrowLeft from "../../assets/icons/Arrow left.svg";
import Button from "../../UI/Button";
import cl from "./TestimonialsBanner.module.css";
import  { useMobile } from  "../../Context/MobileContext"

export default function TestimonialsBanner() {
  const reviews = [
    {
      id: 1,
      name: "Jogh Smith",
      position: "Marketing Director at XYZ Corp",
      review:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      id: 2,
      name: "Emily Johnson",
      position: "CEO of Johnson & Partners",
      review:
        "Positivus has transformed our digital strategy. Their innovative approach and commitment to results have boosted our online sales by 40%. They are a fantastic partner and truly experts in their field.",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Owner of Brown's Fine Furniture",
      review:
        "Thanks to Positivus, we now have a website that truly represents our brand. Their creative solutions and dedication to excellence are unmatched. Highly recommend!",
    },
    {
      id: 4,
      name: "Sophia Lee",
      position: "Head of Communications at GlobalTech",
      review:
        "The team at Positivus exceeded our expectations. Their detailed reports and clear communication made it easy to track our progress, and the results have been outstanding. Our brand visibility has skyrocketed!",
    },
    {
      id: 5,
      name: "Daniel Thompson",
      position: "COO at Greenfield Solutions",
      review:
        "Collaborating with Positivus has been a game changer. They delivered beyond what we thought was possible, increasing our social media engagement by 70% and driving quality traffic to our site. Exceptional service!",
    },
  ];
  const isMobile = useMobile();
  const [activeIndex, setActiveIndex] = useState(1);
  const [previuosIndex, setPreviuosIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(2);
  
 
  const handleNextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setPreviuosIndex(prev=>(prev+1) % reviews.length) 
    setNextIndex(prev=>(prev+1) % reviews.length) 
    
  };

  const handlePreviousReview = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
    setPreviuosIndex(prev=>(prev-1+ reviews.length) % reviews.length) 
    setNextIndex(prev=>(prev-1 + reviews.length) % reviews.length)
  };

  return (
    <div className={cl.container}>
      {isMobile ?  ( 
        <Review reviews={reviews} activeIndex={activeIndex} />
    ):(
      <div className={cl.reviewsContainer}>
        <Review reviews={reviews} activeIndex={previuosIndex} />
        <Review reviews={reviews} activeIndex={activeIndex} />
        <Review reviews={reviews} activeIndex={nextIndex} />
      </div>
    )}
      
      
      <div className={cl.controls}>
        <span className={cl.button} onClick={handlePreviousReview}>
          <img src={arrowLeft} alt="Previous" />
        </span>
        <div className={cl.stars}>
          {reviews.map((_, index) => (
            <svg
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${cl.star} ${index === activeIndex ? cl.active : ""}`}
              width="15"
              height="15"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                fill={index === activeIndex ? "var(green)" : "white"}
              />
            </svg>
          ))}
        </div>
        <span className={cl.button} onClick={handleNextReview}>
          <img src={arrowRight} alt="Next"/>
        </span>
      </div>
    </div>
  );
}
function Review({reviews,activeIndex }){
  return(
    <div className={cl.reviewContainer}>
        <div className={cl.review}>
          <q>{reviews[activeIndex].review}</q>
        </div>
        <div className={cl.reviewer}>
          <span className={cl.name}>{reviews[activeIndex].name}</span>
          <span className={cl.position}>{reviews[activeIndex].position}</span>
        </div>
      </div>
  )
}