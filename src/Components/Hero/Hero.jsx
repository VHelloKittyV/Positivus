import React from "react";
import cl from "./Hero.module.css";
import illustration from "../../assets/Illustration.svg";
import Button from "../../UI/Button";
import netflix from "../../assets/partners/netflix.svg";
import amazon from "../../assets/partners/amazon.svg";
import dribbble from "../../assets/partners/dribbble.svg";
import notion from "../../assets/partners/notion.svg";
import zoom from "../../assets/partners/zoom.svg";
import hotspot from "../../assets/partners/hotspot.svg";

export default function Hero() {
  const partners = [amazon, dribbble, hotspot, notion, netflix, zoom];
  return (
    <>
      <div>
        <div className={cl.container}>
          <div className={cl.heroContainer}>
            <div className={cl.heroTitle}>
              <h1>Navigating the digital landscape for success</h1>
            </div>
            <div className={cl.heroText}>
              <p>
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <Button>Book a consultation</Button>
            </div>
            <div className={cl.heroImg}>
              <img src={illustration} alt="" />
            </div>
          </div>
        </div>

        <div className={cl.partnerContainer}>
          {partners.map((partner, index) => (
            <a href="" key={index}>
              <div className={cl.partnerItem}>
                <img src={partner} alt={`Partner ${index + 1}`} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
