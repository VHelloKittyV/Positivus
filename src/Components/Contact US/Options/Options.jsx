import React, { useState } from "react";
import cl from "./Options.module.css"

function Options() {
  const [option, setOption] = useState("sayHi");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className={cl.formOptions}>
      
      <div className={cl.customLabels}>
        <input
          type="radio"
          name="option"
          id="say_hi" 
          value="sayHi"
          checked={option === "sayHi"} 
          onChange={handleChange} 
        />
        <label htmlFor="say_hi">Say Hi</label>
      </div>

      
      <div className={cl.customLabels}>
        <input
          type="radio"
          name="option"
          id="get_a_quote" 
          value="getAQuote"
          checked={option === "getAQuote"} 
          onChange={handleChange} 
        />
        <label htmlFor="get_a_quote">Get a Quote</label>
      </div>
    </div>
  );
}

export default Options;
