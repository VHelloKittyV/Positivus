import linkArrow from "../../../assets/icons/linkArrow.svg";
import cl from "./CaseBanner.module.css";

const cases = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseBanner({children}) {
  return (
    <div className={cl.caseBannerContainer}>{children}
      {cases.map((item, index) => (
        <div key={index} className={cl.caseBannerCase}>
          <p>{item.description}</p>
          <a href="" className={cl.link}>
            <span>Learn more</span>
            <span>
              <img src={linkArrow} alt="" />
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
