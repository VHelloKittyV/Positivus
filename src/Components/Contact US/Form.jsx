import React, { useState } from "react";
import Button from "../../UI/Button";
import contactUs from "../../assets/ContactUs.svg";
import cl from "./Form.module.css";
import Input from "../../UI/Input";
import Options from "./Options/Options";

export default function Form() {
  return (
    <div className={cl.conatiner}>
      <div className={cl.formConatiner}>
        <Options />

        <div className={cl.form}>
          <div className={cl.label}>
            <label htmlFor="">Name</label>
            <Input className="input" type="text" placeholder="Name" />
          </div>

          <div className={cl.label}>
            <label htmlFor="">Email*</label>
            <Input className="input" type="email" placeholder="Email" />
          </div>

          <div className={cl.label}>
            <label htmlFor="">Message*</label>
            <textarea type="tex" placeholder="Message" />
          </div>
          <Button type="onSubmit">Sent Message</Button>
        </div>
      </div>

      <div className={cl.imgContainer}>
        <img src={contactUs} alt="/" />
      </div>
    </div>
  );
}
