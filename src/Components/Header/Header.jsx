import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import { useMobile } from "../../Context/MobileContext";
import { useModal } from "../../Context/ModalContext";
import NavBar from "./NavBar/NavBar";
import Button from "../../UI/Button";
import cl from "./Header.module.css";
import MenuBurger from "./MenuBurger/MenuBurger";
import close from "../../assets/icons/close.svg"
import Socilas from "./Socials/Socials";

function Logo({ isFooter }) {
  return (
    <div className={cl.logoContainer}>
      <a href="/">
        <img
          src={logo}
          alt="Positivus"
          className={isFooter ? cl.footerLogo : ""}
        />
      </a>
    </div>
  );
}

function MobileHeader({ isFooter }) {
  const { isModal, handleClick, handleClose } = useModal();


  return (
    <div className={isFooter ? cl.footerMobileContainer : cl.mobileContainer}>
    <Logo isFooter={isFooter} />
    {isFooter ? (
      <>
        <NavBar />
        <Socilas />
      </>
    ) : (
      <>
        {isModal ? (
          <div className={isModal ? cl.modalOpen : cl.modal}>
            <span onClick={handleClose}>
              <img src={close} alt="close" />
            </span>
            <NavBar modal={true}/>
          </div>
        ) : (
          <MenuBurger onClick={handleClick} />
        )}
      </>
    )}
  </div>
);
}

function DesktopHeader({ isFooter }) {
  return (
    <div className={isFooter ? cl.footerDestopContainer : cl.desktopContainer}>
      <Logo isFooter={isFooter} />
      <NavBar />
      {isFooter ? (
        <Socilas />
      ) : (
        <Button className="navButton">Request a quote</Button>
      )}
    </div>
  );
}

export default function Header({ isFooter }) {
  const isMobile = useMobile();

  return (
    <header>
      <div className={cl.container}>
        {isMobile  ? (
          <MobileHeader isFooter={isFooter} />
        ) : (
          <DesktopHeader isFooter={isFooter} />
        )}
      </div>
    </header>
  );
}
