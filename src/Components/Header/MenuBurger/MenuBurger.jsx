import cl from "./MenuBurger.module.css";

export default function MenuBurger({onClick}) {
  return (
    <div className={cl.menuIcon} onClick={onClick}>
      <svg
        aria-label="Settings"
        
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Settings</title>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="3"
          x2="21"
          y1="4"
          y2="4"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="3"
          x2="21"
          y1="12"
          y2="12"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="3"
          x2="21"
          y1="20"
          y2="20"
        ></line>
      </svg>
    </div>
  );
}
