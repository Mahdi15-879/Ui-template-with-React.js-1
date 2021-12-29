import React from "react";

import "./styles/Button.css";

const Button = ({ text, cName, href }) => {
  return (
    <a href={href} className={cName}>
      {text}
    </a>
  );
};

export default Button;
