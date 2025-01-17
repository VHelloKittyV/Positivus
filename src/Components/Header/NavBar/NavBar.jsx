import React from "react";
import cl from"./NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <a href="/">
          <li>About Us</li>
        </a>
        <a href="">
          <li>Services</li>
        </a>
        <a href="">
          <li>Use Cases</li>
        </a>
        <a href="">
          <li>Pricing</li>
        </a>
        <a href="">
          <li>Blog</li>
        </a>
      </ul>
    </nav>
  );
}
