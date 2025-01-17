import React from "react";
import cl from "./Banner.module.css";
import Button from "../../../UI/Button";
import banner from '../../../assets/banner/banner.svg'

export default function Banner() {
  return (
    
      <div className={cl.bannerInfoContainer}>

        <div className={cl.bannerInfo}>
          <h3>Let&apos;s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button>Get your free proposal</Button>
        </div>

        <div className={cl.bannerImg}>
          <img src={banner} alt="" />
        </div>
      </div>
    
  );
}
