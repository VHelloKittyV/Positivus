import cl from "./Socials.module.css"
import linkedIn from "../../../assets/social/linkedIn.svg"
import facebook from "../../../assets/social/facebook.svg";
import twitter from "../../../assets/social/twitter.svg";

export default function Socilas() {
  return (
    <nav className={cl.social}>
      <a href="https://linkedin.com">
        <img src={linkedIn} alt="LinkedIn" />
      </a>
      <a href="https://facebook.com">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="https://twitter.com">
        <img src={twitter} alt="Twitter" />
      </a>
    </nav>
  );
}
